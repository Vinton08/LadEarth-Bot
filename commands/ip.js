module.exports = {
    name: 'ip',
    description: "This tells the ip of the server",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
	.setTitle('Server Address')
	.setDescription('The server IP Address')
    .addFields(
        {name: 'IP adress', value: 'Ladearth.mc.gg'}
    )
message.channel.send(newEmbed);
    }

}