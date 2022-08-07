const {MessageEmbed} = require('discord.js')
module.exports = {
    name: 'help',
    cooldown: 10,
    description: "help command",
    execute(message, client, args, Discord) {
        const newEmbed = new MessageEmbed()
        .setColor('#0099ff')
	.setTitle('Commands')
	.setDescription('This tells the commands')
    .addFields(
        {name: 'Rules', value: 'Shows the rules'},
        {name: 'Modpack', value: 'Shows the modpack link'},
        {name: 'Version', value: 'Tells the server version'},
        {name: 'Ip', value: 'Tells the servers IP Address'},
        {name: 'Status', value: 'Tells the servers current status'},
        {name: 'Changelog', value: 'This tells the bots changelog'},
        {name: 'Help', value: 'Brings this up'}

    )
message.channel.send(newEmbed);
    }

}