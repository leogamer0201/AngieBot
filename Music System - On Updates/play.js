const search = require('yt-search');

exports.run = (client, message, args, ops) => {

    search(args.join(' '), function(err, res) {
        if (err) return message.channel.send(':x: **| Algo de errado aconteceu.**');

        let videos = res.videos.slice(0, 5);

        let resp = '';
        for (var i in videos) {
            resp += `**[${parseInt(i)+1}]:** \`${videos[i].title}\`\n`
        }

        resp += `\n**Escolha um número entre** \`1-${videos.length}\``;

        message.channel.send(resp);

        const filter = m => !isNaN(m.content) && m.content < videos.length+1 && m.content > 0;
        const collector = message.channel.createMessageCollector(filter);

        collector.videos = videos;

        collector.once('collect', function(m) {

            let commandFile = require(`./search.js`);
            commandFile.run(client, message, [this.videos[parseInt(m.content)-1].url], ops);
        });
    });
}