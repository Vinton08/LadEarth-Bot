module.exports = {
    name: 'ban',
    cooldown: 10,
    permissions: ["BAN_MEMBERS"],
    description: "ban command",
    execute(message, client, args, Discord){

if(message.member.roles.cache.has('832435340047417414')){

        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.ban();
            message.channel.send(`<@${memberTarget.user.id}> has been banned!`);
        }}else{
            message.channel.send(`You cannot ban that member!`);
        }
        if(!target) return message.reply('Please specify a user to ban.');
    }
}