exports.run = async (client, message, args, ops) => {

    let fetched = ops.active.get(message.guild.id);
    if (!fetched) return message.channel.send(':x: **| Nenhuma música na lista de reprodução.**');

    let queue = fetched.queue;
    let nowPlaying = queue[0];

    let resp = `<:play:507001217558249493> Tocando: \n**${nowPlaying.songTitle}** | Pedida por: **${nowPlaying.requester}**\n\nLista de reprodução:\n`;

    for (var i = 1; i < queue.ength; i++) {
        resp += `${i}. **${queue[i].songTitle}** | Pedida por **${queue[i].requester}**\n`;
    }

    message.channel.send(resp);
}