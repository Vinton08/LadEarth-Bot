const {MessageEmbed} = require('discord.js')
module.exports = {
    name: 'staffcommands',
    cooldown: 10,
    description: "staff commands",
    execute(message, client, args, Discord) {

        if(message.member.roles.cache.has('760189351735984211')){


        const newEmbed = new MessageEmbed()
        .setColor('#0099ff')
	.setTitle('Commands')
	.setDescription('Staff commands')
    .addFields(
        {name: 'Mute', value: 'Mutes a user'},
        {name: 'Unmute', value: 'Unmutes a user'},
        {name: 'Kick', value: 'Kicks a user'},
        {name: 'Ban', value: 'Bans a user'},
        {name: 'slist', value: 'Staff list'},
        {name: 'interviewann', value: 'Announces an interview session'},
        {name: 'Mcpromote', value: 'Promotes a trial mc mod'},
        {name: 'Mcdemote', value: 'demotes a mc mod'},
        {name: 'Dpromote', value: 'Promotes a trial discord mod'},
        {name: 'Ddomote', value: 'Demotes a discord mod'},
        {name: 'Admin Commands', value: '------------'},
        {name: 'adminc1', value: 'Roles List'},
        {name: 'adminc2', value: 'Bot Downtime'},
        {name: 'adminc3', value: 'Backup Reaction Roles'},
        {name: 'adminc4', value: 'Bot Downtime End'},
        {name: 'adminc5', value: 'Unassigned admin command'}

    )
message.channel.send(newEmbed);
    } else {
        message.channel.send('You cannot access this command!')
    }
    }

}