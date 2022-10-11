//Made By Vinton Hester ***DO NOT DISTRIBUTE***
const Discord = require('discord.js');
const config = require("./config.json");
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });
const prefix = '-';
const fs = require('fs');
const mongoose = require('mongoose');
const memberCounter = require('./counters/member-counter');
const swxwarn = require('./counters/swwarn');
client.commands = new Discord.Collection();
client.events = new Discord.Collection();
require("dotenv").config();

client.on('ready', () => {
    memberCounter(client);
    swxwarn(client);
});

['command_handler', 'event_handler'].forEach (handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})



mongoose
    .connect(process.env.MONGODB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('MongoDB Connected!')
    })
    .catch((err) => {
        console.log(err);
    })

client.login(config.token);

