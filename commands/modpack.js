const {MessageEmbed} = require('discord.js')
module.exports = {
    name: 'modpack',
    cooldown: 10,
    description: "This tells the modpack for the server",
    execute(message, client, args, Discord) {
        const newEmbed = new MessageEmbed()
        .setColor('#0099ff')
	.setTitle('Server Modpack')
	.setDescription('LadEarth Modpack')
    .addFields(
        {name: 'Modpack', value: 'https://www.curseforge.com/minecraft/modpacks/ladearth'}
    )
message.channel.send(newEmbed);
    }

}