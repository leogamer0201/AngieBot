const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(message.mentions.users.size < 1) return message.reply("Você precisa mencionar alguém.")
    let user = message.mentions.users.first()
if(user.id == message.author.id) return message.channel.send("Você não pode beijar a si mesmo.")
  let member = message.mentions.users.first() || bot.users.get(args[0]) || message.author;
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle(`:rocket: O que você está fazendo viajante?`)
    .addField(`**:pencil: » Estou vendo :eyes:**`,  `${message.author.tag}: **Ou tio fica calado ae...** \n${member.tag}: **É deixa ele continuar me beijando...**`)    
    .setColor([254, 0, 107])
    .setThumbnail(message.author.avatarURL)
    .setImage('https://pa1.narvii.com/6214/5c506d2760822b9bc97f30eebd75a31ae73a0b2a_hq.gif')
    return message.channel.send(botembed);
  }

module.exports.help = {
    name: "kiss"
}