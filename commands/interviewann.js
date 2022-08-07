module.exports = {
    name: 'interviewann',
    cooldown: 10,
    description: "interview request",
    execute(message, client, args, Discord){

        if(message.member.roles.cache.has('760189351735984211')){

        message.channel.send('<@&867922776105811969> An Interview session is being hosted.')
    } else {
        message.channel.send('You cannot use this command.');
        }
    }
}
    