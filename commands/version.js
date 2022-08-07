const {MessageEmbed} = require('discord.js')
module.exports= {
    name: 'version',
    cooldown: 10,
    description: "This tells the version of the server",
    execute(message, client, args, Discord) {
        const newEmbed = new MessageEmbed()
        .setColor('#0099ff')
	.setTitle('Server Version')
	.setDescription('The server version')
    .addFields(
        {name: 'Version', value: 'Minecraft 1.16.5'}
    )
message.channel.send(newEmbed);
    }

}