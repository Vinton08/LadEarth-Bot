module.exports = async (client) =>{
    const guild = client.guilds.cache.get('738155860739620994');
    setInterval(() =>{
        const channel = guild.channels.cache.get('963605173685587979')
        messsage.channel.send('**These Tweets can sometimes be minutes behind. Do not use this for life saving notifications!**');
        console.log('Severe Warning Issued.');
    },43200000);
}