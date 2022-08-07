const {MessageEmbed} = require('discord.js')
module.exports= {
    name: 'minorc',
    cooldown: 10,
    description: "Minor changelog",
    execute(message, client, args, Discord) {
        const newEmbed = new MessageEmbed()
        .setColor('#0099ff')
	.setTitle('Changelog for version 1.5.1!')
	.setDescription('New Version!')
    .addFields(
        {name: 'Whats New?:', value: 'Major Bug fixes'},
        {name: 'Updates', value: 'Fixed permission issues with certian commands'}
    )
    .setTimestamp()
message.channel.send(newEmbed);
    }

}