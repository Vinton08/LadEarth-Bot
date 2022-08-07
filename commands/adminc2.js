const {MessageEmbed} = require('discord.js')
module.exports = {
    name: 'adminc2',
    description: "Downtime for bot.",
    execute(message, client, args, Discord) {

        if(message.member.roles.cache.has('760189275635056691')){
        const newEmbed = new MessageEmbed()
        .setColor('00ff00')
	.setTitle('Scheduled Downtime')
	.setDescription('Scheduled on the bot has been complete!')
    .addFields(
        {name: 'Duration', value: '**Complete!**'},
        
    )
    .setTimestamp()
    message.channel.send(newEmbed);
        } else {
            message.channel.send('You do not have permission to use this command!');
        }
    }       
    }

