const profileModel = require("../models/profileSchema");
module.exports = {
    name: "withdraw",
    aliases: ["with"],
    description: "Withdraw coins from bank.",
    async execute(message, args, cmd, client, discord, profileData) {
        const amount = args[0];
        if (amount % 1 != 0 || amount <= 0) return message.channel.send('You must withdraw a whole number!');

        try{
            if (amount > profileData.bank) return message.channel.send('Insufficient Funds.');
            await profileModel.findOneAndUpdate({
                userID: message.author.id
            }, {
                $inc: {
                    coins: amount,
                    bank: -amount,
                }
            });
            return message.channel.send(`Withdrew ${amount} from bank bank.`);
        }catch(err){
        console.log(err)
    }
    },
};