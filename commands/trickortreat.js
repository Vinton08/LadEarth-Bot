const profileModel = require("../models/profileSchema")

module.exports = {
    name: "trickortreat",
    aliases: ["trick", "tt"],
    permissions: [],
    description: "Halloween 2022!",
    async execute(message, args, cmd, client, discord, profileData) {

        const locations = [
            "Vinton's House",
            "Pear's House",
            "LadEarth Server",
            "Volcanoid Federation",
            "Waffle's House",
            "Canada"
        ];

        const chosenLocations = locations.sort(() => Math.random() - Math.random()).slice(0, 3);

        const filter = ({ author, content }) => message.author == author && chosenLocations.some((location) => location.toLowerCase() == content.toLowerCase());

        const collector = message.channel.createMessageCollector(filter, { max: 1, time: 25000 });

        const earnings = Math.floor(Math.random() * (100 - 9 + 1)) + 10;


        collector.on('collect', async (m) => {
            message.channel.send(`You got ${earnings} candy!`);

            await profileModel.findOneAndUpdate(
                {
                    userID: message.author.id,
                },
                {
                    $inc: {
                        candy: earnings,
                    },
                }
            );
        });

        collector.on('end', (collected, reason) => {
            if (reason == "time") {
                message.channel.send('You ran out of time!');
            }
        });


        message.channel.send(`<@${message.author.id}> Which location would you like to search?\n Type the location in this channel\n \`${chosenLocations.join('` `')}\``);
    }
}