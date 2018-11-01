const Discord = require('discord.js');
const db = require('quick.db');
const utils = require("../utils.js");

exports.run = async (client, message, args) => {
  let user = message.mentions.users.first() || message.author;
 
  let xp = await db.fetch(`xp_${user.id}`);
  if (xp === null) xp = 0;
  let level = await db.fetch(`level_${user.id}`);
  if (level === null) level = 0
  
  let need = utils.need(level+1);
  
  const embed = new Discord.RichEmbed()
    .setColor([202, 202, 0])
    .setAuthor("RANK: " + user.username, user.avatarURL)
    .setThumbnail(user.avatarURL)
    .setDescription("LEVEL " + level + "[" + xp + "/" + need + "]")
    .addField("🎰 | **Informação do seu XP?**", "**!!rank <nome>**", true)
    .setFooter(`${message.author.username}`, message.author.displayAvatarURL)
    .setTimestamp();
  message.channel.send(embed);
  
}