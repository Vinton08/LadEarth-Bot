const {MessageEmbed} = require('discord.js')
module.exports = {
    name: 'adminc4',
    description: "Downtime for bot.",
    execute(message, client, args, Discord) {

        if(message.member.roles.cache.has('760189275635056691')){
        const newEmbed = new MessageEmbed()
        .setColor('#ff0000')
	.setTitle('Scheduled Downtime')
	.setDescription('Scheduled matinance will be conducted on the bot')
    .addFields(
        {name: 'Duration', value: '1:25 UTC - 2:30 UTC'},
        
    )
    .setTimestamp()
    message.channel.send(newEmbed);
        } else {
            message.channel.send('You do not have permission to use this command!');
        }
    }       
    }

