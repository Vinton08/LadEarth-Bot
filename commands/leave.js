module.exports = {
    name: 'leave',
    description: 'leave command for music',
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;
        if (!voiceChannel) return message.channel.send('You need to join a voice channel first!')
        await voiceChannel.leave();
        await message.channel.send('Leaving voice channel.')
    }
}