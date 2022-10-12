<<<<<<< HEAD
module.exports = {
    name:'adminc5',
    description:'gpac',
    execute(message, args, cmd, client, discord){
        if(message.member.roles.cache.has('760189351735984211')){
            const channel = guild.channels.cache.get('963605173685587979');
            channel.send('**These Tweets can sometimes be minutes behind. Do not use this for life saving notifications!**');
            console.log('Severe warning override used!')
        }else{
            message.channel.send(`You do not have permission to run this command!`);
        }
    }
}
=======
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
>>>>>>> f438fcfb430437937b13b7ba762c49416524db7c