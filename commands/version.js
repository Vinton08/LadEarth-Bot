module.exports= {
    name: 'version',
    description: "This tells the version of the server",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
	.setTitle('Server Version')
	.setDescription('The server version')
    .addFields(
        {name: 'Version', value: 'Minecraft 1.7.10'}
    )
message.channel.send(newEmbed);
    }

}