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
        {name: 'Beg', value: 'Beg for coins'},
        {name: 'Deposit', value: 'Deposit coins'},
        {name: 'Withdraw', value: 'Withdraw coins'},
        {name: 'Search', value: 'Search for coins'},
        {name: 'Balance', value: 'Balance of coins in bank'},
        {name: 'Play', value: 'Play a song either by name or YouTube URL'},
        {name: 'Leave', value: 'Leave current VC'},
        {name: 'Weather', value: 'Current weather in a given area'},
        {name: 'Ticket', value: 'Opens a support ticket'},
        {name: 'Info', value: 'Info about the server'},
        {name: 'Help', value: 'Brings this up'}


    )
message.channel.send(newEmbed);
    }

}