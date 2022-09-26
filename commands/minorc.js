const {MessageEmbed} = require('discord.js')
module.exports= {
    name: 'minorc',
    cooldown: 10,
    description: "Minor changelog",
    execute(message, client, args, Discord) {
        const newEmbed = new MessageEmbed()
        .setColor('#0099ff')
	.setTitle('Changelog for version 1.9.8!')
	.setDescription('New Version!')
    .addFields(
        {name: 'Whats New?:', value: 'Updated Help Commands'},
        {name: 'Updates', value: 'Updated help command'}
    )
    .setTimestamp()
message.channel.send(newEmbed);
    }

}