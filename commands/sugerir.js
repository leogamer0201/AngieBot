const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

    let sugestaoMensagem = args.join(" ");

    if (!sugestaoMensagem) {
        return message.reply("__**Erro**__: Você não escreveu a sua Sugestão!")
    }

    const SugestaoEmbed = new Discord.RichEmbed()
        .setTitle(`:pencil: Sugestão **🚀 Angie**`)
        .addField("Autor", `${message.author.tag}`, false)
        .addField("Sugestão", `${sugestaoMensagem}`, false)
        .setTimestamp()
        .setColor(0x00ffff)
        .setThumbnail(message.author.avatarURL)
        .setFooter(message.author.username, message.author.avatarURL)


    client.channels.get('502237988319657984').send({embed: SugestaoEmbed}).then(SugestaoEmbed => {
        SugestaoEmbed.react("👍")
            SugestaoEmbed.react("👎")
                SugestaoEmbed.react("😍")
                    SugestaoEmbed.react("❤")
            });


    message.reply(`__**Concluído**__: Um membro da staff irá falar consigo.`);
    return;
}

module.exports.ajuda = {
    nome: "sugerir"
}