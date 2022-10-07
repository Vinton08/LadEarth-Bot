module.exports = {
    name: "candy",
    cooldown: 10,
    aliases: [],
    description: "Halloween 2022!",
    execute(message, args, cmd, client, discord, profileData){
        message.channel.send(`You have ${profileData.candy} candy in your basket!`);
    }
}