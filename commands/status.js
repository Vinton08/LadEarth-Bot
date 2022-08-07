const {MessageEmbed} = require('discord.js')
module.exports = {
    name: 'status',
    cooldown: 10,
    description: "server status",
    execute(message, client, args, Discord) {
        const newEmbed = new MessageEmbed()
        .setColor('#0099ff')
	.setTitle('Server Status')
	.setDescription('The servers current status')
    .addFields(
        {name: 'Date', value: '1/12/2022'},
        {name: 'Time', value: '18:18 UTC'},
        {name: 'Whats Happening?', value: 'Server is up!'}
        
    )
    .setTimestamp()
message.channel.send(newEmbed);
    }

}