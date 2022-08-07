const {MessageEmbed} = require('discord.js')
module.exports = {
    name: 'adminc1',
    description: "server member roles",
    execute(message, client, args, Discord) {
        if(message.member.roles.cache.has('760189275635056691')){
        const newEmbed = new MessageEmbed()
        .setColor('#0099ff')
	.setTitle('Roles')
	.setDescription('')
    .addFields(
        {name: 'Management roles', value: '⠀'},
        {name: 'Manager', value: 'The manager of the server who controles everything'},
        {name: 'Head Admin', value: 'The head administraitor not as cool but still cool'},
        {name: 'Administrative roles', value: '⠀'},
        {name: 'Admin', value: 'Controls some stuff but not all that cool'},
        {name: 'Moderation roles', value: '⠀'},
        {name: 'Discord Mod', value: 'Discord server mod'},
        {name: 'Minecraft Mod', value: 'Moderates the Minecraft server'},
        {name: 'Jr. Discord mod', value: 'Trial discord mods they help with some stuff'},
        {name: 'Jr. Minecraft mod', value: 'Trial discord mods they do some stuff'},
        {name: 'Non Moderation roles', value: '⠀'},
        {name: 'Event Master', value: 'Organizes all of the events'},
        {name: 'Event', value: 'Help organize/operate the events'},
        {name: 'Serer Booster', value: 'Very, Very cool people (Very awesome)'},
        {name: 'Beta Tester', value: 'Help beta test the server and help look for bugs before they are released'},
        {name: 'Member', value: 'Given to everyone when they react in verification'}
       
        
    )
    message.channel.send(newEmbed);
        } else {
            message.channel.send('You do not have permission to use this command!');
        }

    }

}