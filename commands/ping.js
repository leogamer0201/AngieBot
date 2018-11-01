const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
  const m = await message.channel.send("Calculando....");
  let author = message.mentions.users.first() || message.author;

  const embed = new Discord.RichEmbed()
  .setColor([254, 0, 107])
  .setDescription("<:dc:500682569692610570> > **PING**")
  .setThumbnail(message.author.displayAvatarURL)
  .setImage("https://media.giphy.com/media/29pO4769mY0oWHnc7C/giphy.gif")
  .addField("**<:ping:466453647358689292> Sua Latência:**", + m.createdTimestamp - message.createdTimestamp + "**ms.**", true)
  .addField("**<:api:500706614731341834> API Latência:**", + Math.round(bot.ping) + "**ms.**", true)
  .setFooter(`🚀 ${bot.user.username}`, bot.user.avatarURL)
  .setTimestamp();

m.edit(embed);
    }