const profileModel = require("../models/profileSchema");
module.exports = {
    name: "beg",
    cooldown: 15,
    description: "Beg for coins",
    async execute(message, args, cmd, client, discord, profileData){
        const randomNumber = Math.floor(Math.random() * 1000) + 50;
        const response = await profileModel.findOneAndUpdate({
            userID: message.author.id,
        },{
            $inc: {
                coins: randomNumber
            }
        });
        return message.reply(`You begged Vinton for ${randomNumber} and good for you, he had money for you!`)
    },
};