const {MessageEmbed} = require('discord.js')
module.exports = {
    name: 'changelog',
    cooldown: 10,
    aliases: ["change","chng"],
    description: "bot changelog",
    execute(message, client, args, Discord) {
        const newEmbed = new MessageEmbed()
        .setColor('#00f0f0')
	.setTitle('Chnagelog for version 1.9.6')
	.setDescription('New Version!')
    .addFields(
        {name: 'Updated', value: 'Weather Commands'},
        {name: 'Commands:', value: '-Weather Location'}
    )
    .setTimestamp()
message.channel.send(newEmbed).then((msg)=>{
    message.delete();
})
    }

}