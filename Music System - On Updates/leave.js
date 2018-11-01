exports.run = (client, message, args, ops) => {

    if (!message.member.voiceChannel) return message.channel.send(':x: **| Por favor entre em um canal de música.**');

    if (!message.guild.me.voiceChannel) return message.channel.send(':x: **| Desculpe, mas não estou contectado em um canal de música.**');

    if (message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.channel.send(':x: **| Desculpe, você não está no mesmo canal que eu.**');

    message.guild.me.voiceChannel.leave();

    message.channel.send(':musical_note: **| Saindo do canal...**');
}