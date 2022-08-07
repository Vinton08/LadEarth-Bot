const {MessageEmbed} = require('discord.js')
module.exports = {
    name: 'adminc3',
    description: "Reaction Role command",
    async execute(message, args, Discord, client) {
        const channel = '834532380793634906';
        const announceRole = message.guild.roles.cache.find(role => role.name === "Announcements");
        const eventsRole = message.guild.roles.cache.find(role => role.name === "Event Ping");
        const partnerRole = message.guild.roles.cache.find(role => role.name === "Partnership ping");
        const modpackRole = message.guild.roles.cache.find(role => role.name === "Modpack Updates");
        const pollRole = message.guild.roles.cache.find(role => role.name === "Polls");
        const wxRole = message.guild.roles.cache.find(role => role.name === "Severe Weather");

        const announceEmoji = '📣';
        const eventEmoji = '🎪';
        const partnerEmoji = '🤝';
        const modpackEmoji = '🛠️';
        const pollEmoji = '📊';
        const wxEmoji = '🌩';

        let embed = new MessageEmbed()
        .setColor('#ff00ff')
        .setTitle('Self Roles')
        .setDescription('Below is a list of self roles that you can chose from in the server')
        .addFields(
            {name: '📣', value: 'Announcements'},
            {name: '🎪', value: 'Events'},
            {name: '🤝', value: 'Partnerships'},
            {name: '🛠️', value: 'Modpack Updates'},
            {name: '📊', value: 'Public Polls'},
            {name: '🌩', value: 'Weather Pings'}
        )
        let messageEmbed = await message.channel.send(embed)
        messageEmbed.react(announceEmoji);
        messageEmbed.react(partnerEmoji);
        messageEmbed.react(eventEmoji);
        messageEmbed.react(modpackEmoji);
        messageEmbed.react(pollEmoji);
        messageEmbed.react(wxEmoji);

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === announceEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(announceRole);
            }   if (reaction.emoji.name === eventEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(eventsRole);
            }   if (reaction.emoji.name === partnerEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(partnerRole);
            }   if (reaction.emoji.name === modpackEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(modpackRole);
            }   if (reaction.emoji.name === pollEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(pollRole);
            }   if (reaction.emoji.name === wxEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(wxRole);
        }

            } else {
                return;
            }
        });

        client.on('messageReactionRemove', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === announceEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(announceRole);
            }   if (reaction.emoji.name === eventEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(eventsRole);
            }   if (reaction.emoji.name === partnerEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(partnerRole);
            }    if (reaction.emoji.name === modpackEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(modpackRole);
            }   if (reaction.emoji.name === pollEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(pollRole);
            }   if (reaction.emoji.name === wxEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(wxRole);
            }  
                
            } else {
                return;
            }
        });
    }
}