const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '-';
const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file =>file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
client.commands.set(command.name, command);
}

client.once('ready', () =>{
    console.log('Ladearth bot is active!')
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(" ");
    const command = args.shift().toLowerCase();

    if(command === 'ip'){
        client.commands.get('ip').execute(message, args, Discord);
    } else if (command == 'version'){
        client.commands.get('version').execute(message, args, Discord);
    }

});

client.login('NzQ5NDgzNTk0MDg2MzUwODU4.X0so_Q.OPMCyAMOndplv6ROLc8aupnz2tA');