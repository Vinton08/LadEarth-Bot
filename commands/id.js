const {MessageEmbed} = require('discord.js')
module.exports= {
    name: 'id',
    cooldown: 10,
    description: "bot identifier",
    execute(message, client, args, Discord) {

        if(message.member.roles.cache.has('760189275635056691')){
        const newEmbed = new MessageEmbed()
        .setColor('#0099ff')
	.setTitle('What branch is the bot currently running?')
	.setDescription('New Version!')
    .addFields(
        {name: 'Branch:', value: 'Stable branch in E drive.'}
    )
    .setTimestamp()
message.channel.send(newEmbed);
    } else {
        message.channel.send('You do not have permission to use this command!');
    }
    }
}