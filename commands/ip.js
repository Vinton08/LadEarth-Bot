const {MessageEmbed} = require('discord.js')
module.exports = {
    name: 'ip',
    cooldown: 10,
    description: "This tells the ip of the server", 
    execute(message, client, args, Discord) {
        const newEmbed = new MessageEmbed()
        .setColor('#0099ff')
	.setTitle('Server Address')
	.setDescription('The server IP Address')
    .addFields(
        {name: 'IP address', value: 'Ladearth.mc.gg'}
    )
message.channel.send(newEmbed);
    }

}