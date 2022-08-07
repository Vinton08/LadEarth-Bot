const {MessageEmbed} = require('discord.js')
module.exports = {
    name: 'credits',
    cooldown: 10,
    description: "credits",
    execute(message, client, args, Discord) {
        const newEmbed = new MessageEmbed()
        .setColor('#0099ff')
	.setTitle('Credits')
	.setDescription('All the amazing people who helped develop the bot!')
    .addFields(
        {name: 'Main Dev', value: 'VintonNotFound#0424'},
        {name: 'Debugging/Troubleshooting', value: '<@983916599163625483>'},
        {name: 'Debugging/Troubleshooting', value: '<@989846633049120808>'},
        {name: 'Debugging/Troubleshooting', value: '<@949076602858397726'},
        {name: 'Debugging/Troubleshooting', value: '<@674476505614516247>'}

    )
message.channel.send(newEmbed);
    }

}