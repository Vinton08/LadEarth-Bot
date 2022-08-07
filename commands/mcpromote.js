module.exports = {
    name: 'mcpromote',
    cooldown: 10,
    permissions: ["MANAGE_ROLES"],
    description: "minecraft promote command",
    execute(message, client, args, Discord){
//trial mc => mc mod
        if(message.member.roles.cache.has('760189351735984211')){
       

        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Trial Minecraft Moderator');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Minecraft Moderator');

            let memberTarget= message.guild.members.cache.get(target.id)

            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> Has Been Promoted!`)
        }} else {
            message.channel.send('You cannot promote this member!')
        }
    }
}