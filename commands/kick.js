module.exports = {
    name: 'kick',
    cooldown: 10,
    description: "kick command",
    execute(message, client, args, Discord){
if(message.member.roles.cache.has('760189351735984211')){

        const target = message.mentions.users.first();
        if(!target) return message.reply('Please specify a user to kick.');
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            message.channel.send(`<@${memberTarget.user.id}> has been kicked!`);
        }}else{
            message.channel.send(`You cannot kick that member!`);
        }
        if(!target) return message.reply('Please specify a user to kick.');
    }
}