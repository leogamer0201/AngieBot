const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  let u = message.author;
    if (args.length === 0) return message.channel.send("**" + message.author.username + "**, use: `!!rep <mention_user>`");
  let user = message.mentions.users.first() || message.author;
  if (user === message.author) return message.channel.send("**" + message.author.username + "**, você não pode dar um ponto de reputação a si mesmo!!");
  if (user.bot) return message.channel.send("**" + message.author.username + "**, você não pode dar um ponto de reputação a um bot!");
  
  var repday = await db.fetch(`repday_${u.id}`);
  if (repday === null) repday = 0;
  var repmonth = await db.fetch(`repmonth_${u.id}`);
  if (repmonth === null) repmonth = 0;
  var day = new Date().getDate();
  var month = new Date().getMonth();
  if (repday === day && repmonth === month) return message.channel.send("**" + message.author.username + "**, você já deu um ponto de reputação!");
  
  db.set(`repday_${u.id}`, day);
  db.set(`repmonth_${u.id}`, month);
  
  var rep = await db.fetch(`rep_${user.id}`);
  if (rep === null) db.set(`repday_${user.id}`, 0);
  db.add(`rep_${user.id}`, 1);
  
  message.channel.send("**" + u.username + "** você deu um ponto de reputação a " + `<@${user.id}>` + "!");
  
}