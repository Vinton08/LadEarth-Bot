const profileModel = require("../models/profileSchema");
module.exports = {
    name: "give",
    aliases: [""],
    description: "Give users coins.",
    async execute(message, args, cmd, client, discord, profileData) {
        if(message.member.roles.cache.has('760189351735984211')){
            if(!args.length) return message.channel.send('Please mention a member.')
            const amount = args[1]
            const target = message.mentions.users.first();
            if(!target) return message.chanel.send('User does not exist.')
            if (amount % 1 != 0 || amount <= 0) return message.channel.send('Please use a whole number!');

            try{
                const targetData = await profileModel.findOne({userID: target.id});
                if(!targetData) return message.channel.send(`User does not exist.`)

                await profileModel.findOneAndUpdate({
                    userID: target.id
                }, {
                    $inc:{
                        coins: amount
                    }
                });
                return message.channel.send(`${target} has been given ${amount} of coins.`)
            }catch(err){
                console.log(err)
            }
        }else{
            message.channel.send('You do not have permission to give this person coins.')
        }
    }
}