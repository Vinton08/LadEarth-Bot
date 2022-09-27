module.exports = async (client) =>{
    const guild = client.guilds.cache.get('738155860739620994');
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('946513912554192976')
        channel.setName(`Total Members: ${memberCount.toLocaleString()}`);
        console.log('Updating Member Count')
    },300000);
}