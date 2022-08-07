const {MessageEmbed} = require('discord.js')
module.exports = {
    name: 'info',
    cooldown: 10,
    description: "server info",
    execute(message, client, args, Discord) {
        const newEmbed = new MessageEmbed()
        .setColor('#0099ff')
	.setTitle('Server Info')
	.setDescription('Everything you need to know about the server')
    .addFields(
        {name: 'Server Version', value: '1.16.5'},
        {name: 'Server IP', value:'LadEarth.mc.gg'},
        {name: 'Modpack Link', value: 'https://www.curseforge.com/minecraft/modpacks/ladearth'},
        {name: 'Important Channels', value: '<#753678747110080586>, <#791211820543115264>, <#791211862909386802>'}
        
    )
message.channel.send(newEmbed);
    }

}