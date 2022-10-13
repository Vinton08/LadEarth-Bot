const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'halloween',
    cooldown: 10,
    permissions: ["MANAGE_ROLES"],
    description: "Halloween 2022",
    async execute(message, args, Discord, client){
        const role = message.guild.roles.cache.find(role => role.name === "Halloween 2022");
        const emoji = '🎃';
        let embed = new MessageEmbed()
        .setColor('#ff9900')
        .setTitle('Halloween 2022')
        .setDescription('Click to get the Halloween 2022 role!')   
        let messageEmbed = await message.channel.send(embed)    
        messageEmbed.react(emoji);
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

                if (reaction.emoji.name === emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(role);
                } else {
                    return;
                }
            });
    }
}