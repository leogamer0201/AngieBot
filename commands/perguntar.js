const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    if(!args[2]) return message.channel.send(":x: **| Por favor, faça uma pergunta completa!**");
    let replies = ["Sim.", "Não.", "Eu não sei.", "Tu não tens namorada.", "Pocoyo é gay.", "Tu dás o bumbum.", "Inscreva-se no canal: ItzLano ou ImLano.", "Portugal campeão da Europa em 2016.", "Estou sem ideias de respostas, envie usando `!!sugestão <suasugestão>`."];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(1).join(" ");

    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setDescription(":frame_photo: **| :rocket: Angie responde!**")
    .setColor([254, 0, 107])
    .setThumbnail(message.author.avatarURL)
    .addField(":pencil: Pergunta", question)
    .addField(":books: Resposta", replies[result])
    .setFooter(`🚀 ${client.user.username}`, client.user.avatarURL);

    message.channel.send(embed);
}

module.exports.help = {
    name: "Perguntar"
}