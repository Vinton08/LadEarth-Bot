const {MessageEmbed} = require('discord.js')
module.exports = {
    name: 'rules',
    cooldown: 10,
    description: "rule command",
    execute(message, client, args, Discord) {
        const newEmbed = new MessageEmbed()
        .setColor('#0099ff')
	.setTitle('Discord Rules')
	.setDescription('The rules for the LadEarth server')
    .addFields(
        {name: 'All rules can be found in <#791211862909386802>', value: 'the rules can be found in there'},
        {name: 'Extended Rules ', value: 'https://docs.google.com/document/d/1Scr1gPnWDqnV2fStewOKh1v9PjHSvSDrUDOLtz_HR7o/edit?usp=sharing'},

    )
message.channel.send(newEmbed);
    }

}