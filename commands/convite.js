const Discord = require('discord.js')

exports.run = (client, message, args) => {

    const embed = new Discord.RichEmbed()
        .setColor([254, 0, 107])
        .setThumbnail(message.client.avatarURL)
        .setDescription('🚀 Viajante [Clique aqui](https://discord.gg/nvrnPmp)')
        .addField(":rocket: Entre já no servidor de suporte da Angie!", "E venha-se divertir junto, ajudando também a melhorar o seu sistema.", true)
        .setFooter(`🚀 ${client.user.username}`, client.user.avatarURL)
        .setTimestamp();
}

exports.help = {
    name: "convite"
}