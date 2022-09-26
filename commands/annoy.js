module.exports = {
    name: 'annoy',
    cooldown: 10,
    description: "why did i make this",
    execute(message, client, args, Discord) {

        message.channel.send('<@493574454752837632> I am hungry, please feed me.').then((msg)=>{
            message.delete();
        })
    }
}