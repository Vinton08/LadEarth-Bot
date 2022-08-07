const {MessageEmbed} = require('discord.js')
module.exports = {
    name: 'slist',
    cooldown: 10,
    description: "staff list",
    execute(message, client, args, Discord) {

        if(message.member.roles.cache.has('760189275635056691')){
        const newEmbed = new MessageEmbed()
        .setColor('#0099ff')
	.setTitle('Staff List')
	.setDescription('All current staff in the server')
    .addFields(
        {name: 'Server Management', value: '\/ \/ \/ \/ \/ \/'},
        {name: 'Manager', value: '<@493574454752837632>'},
        {name: 'Head Admin', value: '<@723367626692100167>'},
        {name: 'Administrative roles', value: '\/ \/ \/ \/ \/ \/'},
        {name: 'Admin', value: 'To Be Determined'},
        {name: 'Moderation roles', value: '\/ \/ \/ \/ \/ \/'},
        {name: 'Discord Mods', value: '<@152880236562874368>, <@469291964760850443>, <@515716015766765578>, <@705045834466852899>, <@470705775736651790>'},
        {name: 'Minecraft Mods', value: '<@638863950972321802>, <@469995975100858390>, <@768270246184222751>'},
        {name: 'Jr. Discord Mods', value: 'To Be Determined'},
        {name: 'Jr. Minecraft mods', value: 'To Be Determined'},
        {name: 'Support Team', value: '<@152880236562874368>'}
       
        
    )
    message.channel.send(newEmbed);
        } else {
            message.channel.send('You do not have permission to use this command!');
        }

    }

}