module.exports = {
    name: 'unmute',
    cooldown: 10,
    permissions: ["MUTE_MEMBERS"],
    description: "unmute command",
    execute(message, client, args, Discord){
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Mute');

            let memberTarget= message.guild.members.cache.get(target.id)

            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);
            message.channel.send(`<@${memberTarget.user.id}> Has Been Unmuted!`)
        } else {
            message.channel.send('You cannot unmute this member!')
        }
    }
}