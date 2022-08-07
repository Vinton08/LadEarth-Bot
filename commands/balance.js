module.exports = {
    name: "balance",
    cooldown: 10,
    aliases: ["bal","bl"],
    description: "Checks user balance",
    execute(message, args, cmd, client, discord, profileData){
        message.channel.send(`Your wallet balance is ${profileData.coins}, your bank is ${profileData.bank}`);
    }
}