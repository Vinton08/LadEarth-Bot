module.exports = {
    name: 'adminc5',
    description: 'gpac',
    execute(message, client, args, Discord){

        if(message.member.roles.cache.has('760189275635056691')){

    const channel = message.guild.channels.cache.find(c => c.name === '🌪severe-weather');
    channel.send('**These Tweets can sometimes be minutes behind. Do not use this for life saving notifications!**').then((msg)=>{
        message.delete();
    })
}else{
    message.channel.send('You do not have perrmission to run this command!');
}
    }
}