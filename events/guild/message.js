const profileModel = require('../../models/profileSchema')

const cooldowns = new Map();


module.exports = async (Discord, client, message) => {
    const prefix = '-';
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
let  profileData;
try{
    profileData = await profileModel.findOne({userID: message.author.id});
    if(!profileData){
        let profile = await profileModel.create({
            userID: message.author.id,
            serverID: message.guild.id,
            coins: 1000,
            bank: 0
        });
        profile.save();
    }
}catch(err){
    console.log(err)
}
  
    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    
    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));


if(!cooldowns.has(command.name)){
    cooldowns.set(command.name, new Discord.Collection())
}

const current_time = Date.now();
const time_stamps = cooldowns.get(command.name);
const cooldown_amount = (command.cooldown) * 1000;

if(time_stamps.has(message.author.id)){
    const experation_time = time_stamps.get(message.author.id) + cooldown_amount;

    if(current_time < experation_time){
        const time_left = (experation_time - current_time) / 1000;
        return message.reply(`Please wait ${time_left.toFixed(1)} more seconds to use ${command.name}`)
    }
}

    time_stamps.set(message.author.id, current_time);
    setTimeout(() => time_stamps.delete(message.author.id), cooldown_amount);
    

    try{
        command.execute(message, args, Discord, client, cmd, profileData);
    } catch (err){
        message.channel.send("There was a problem running this command.")
        console.log(err);
    }

};