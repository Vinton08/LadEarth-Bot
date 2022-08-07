module.exports = {
    name: 'interviewreq',
    cooldown: 10,
    description: "interview request",
    execute(message, client, args, Discord) {

        if(message.member.roles.cache.has('867922776105811969')){

        message.channel.send('<@&934656080238215250> Someone has requested an interview.')
    } else {
        message.channel.send('You cannot use this command.');
        }
    }
}
    