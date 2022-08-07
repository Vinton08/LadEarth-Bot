const profileModel = require("../models/profileSchema");
module.exports = {
    name: "deposit",
    aliases: ["dep"],
    description: "Deposit coins to bank.",
    async execute(message, args, cmd, client, discord, profileData) {
        const amount = args[0];
        if (amount % 1 != 0 || amount <= 0) return message.channel.send('You must deposit a whole number!');
        try {
            if (amount > profileData.coins) return message.channel.send('Insufficient Funds.');
            await profileModel.findOneAndUpdate({
                userID: message.author.id
            }, {
                $inc: {
                    coins: -amount,
                    bank: amount,
                }
            });
            return message.channel.send(`Deposited ${amount} into bank.`);
        } catch (err) {
            console.log(err)
        }
    },
}