exports.run = async (client, message, args, ops) => {

    let fetched = ops.active.get(message.guild.id);

    if (!fetched) return message.channel.send(':x: **| Não estou tocando nenhuma música.**');

    if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send(':x: **| Desculpe, você não está no mesmo canal que eu.**');

    let userCount = message.member.voiceChannel.members.size;

    let required = Math.ceil(userCount/2);

    if (!fetched.queue[0].voteSkips) fetched.queue[0].voteSkips = [];

    if (fetched.queue[0]. voteSkips.includes(message.member.id)) return message.channel.send(`:x: **| Você já votou. ${fetched.queue[0].voteSkips.length}/${required} requirido.**`);

    fetched.queue[0].voteSkips.push(message.author.id);

    ops.active.set(message.guild.id, fetched);

    if (fetched.queue[0].voteSkips.length >= required) {
        message.channel.send('<:play:507001217558249493> Música **Pulada.**');

        return fetched.dispatcher.emit('finish');

    }

    message.channel.send(`<:play:507001217558249493> Pulando... ${fetched.queue[0].voteSkips.length}/${required} requirido.`)
}