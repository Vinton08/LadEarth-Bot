const {MessageEmbed} = require('discord.js')
module.exports = {
    name: 'suggestions',
    aliases: ['suggest'],
    description: 'suggest command',
    execute(message, args, cmd, client, discord){
        const channel = message.guild.channels.cache.find(c => c.name === 'suggestion-review')
        const suggest = message.guild.channels.cache.find(c => c.name === '🗳suggestions');
        if(!channel) return message.channel.send('You do not have a suggestions channel.')

        const check = '✅';
        const deny = '❌';

        let messageArgs = args.join(' ');
        if(!messageArgs) {
            message.delete
            return message.channel.send('Please provide a suggestion.');
        }


        const embed = new  MessageEmbed()
        .setColor('ff9900')
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true}))
        .setDescription(messageArgs)
        .addField('Status:', 'Pending')
        .setTimestamp()

        channel.send(embed).then((msg) => {
            msg.react(check);
            msg.react(deny);
            

            
        }).catch((err)=>{
            throw err;
        })
        
    }
}