const Discord = require('discord.js');
const config = require("./config.json");
const db = require('quick.db');
const cooldown = require("./cooldown.js");
const utils = require("./utils.js");
const ownerID = 'SEU ID AQUI';
const prefix = '!!';
const active = new Map();

const client = new Discord.Client();
client.prefix = config.prefix;

client.on("ready", () => {
  client.user.setPresence({ game: { name: `Voando pela galáxia 🚀...`, type: 0 } });
    const status = [`Use => !!comandos`, `Divirto ${client.users.size} 🚀 foguetezinhos!`, `Os conhecimentos de ImLano#4239.`, `Em ${client.guilds.size} galáxias 🚀!`, `Entre na minha galáxia 🚀 https://discord.gg/hwV6vfg 🚀`]
    let counter = 0
    setInterval(function() {
       client.user.setPresence({ game: { name: status[counter], type: 0 } });
        counter+= 1
        counter %= status.length
    }, 10000)
});

client.on("message", async message => {
  let msg = message.content.toLowerCase();
  if (message.author.bot) return undefined;
  let user = message.author;
  
  let xp = await db.fetch(`xp_${user.id}`);
  if (xp === null) xp = 0;
  let level = await db.fetch(`level_${user.id}`);
  if (level = null) level = 0;

  if (!cooldown.is(user.id)) {
  cooldown.add(user.id); 
  var add = Math.floor(Math.random() * 15) + 10;
  db.add(`xp_${user.id}`, add);   
  setTimeout(() => {
    cooldown.remove(user.id);
    }, 1000 * 60);
  }
  
  while (xp >= utils.need(level+1)) {
    if (xp >= utils.need(level+1)) {
      db.subtract(`xp_${user.id}`, utils.need(level+1));
      db.add(`level_${user.id}`, 1);
      xp = await db.fetch(`xp_${user.id}`);
      level = await db.fetch(`level_${user.id}`);
      let embed = new Discord.RichEmbed()
        .setAuthor("SUBIU DE NÍVEL")
        .setDescription("Ei, você subiu para o **nível " + level + "!**")
        .setColor([170, 99, 0])
        .setFooter("Informação de Nível", user.avatarURL)
        .setTimestamp();
      message.channel.send(embed);
    }
  }

  if (message.content.indexOf(client.prefix) !== 0) return;
    let args = message.content.slice(prefix.length).trim().split(' ');
    let cmd = args.shift().toLowerCase();

    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;

    try {


        delete require.cache[require.resolve(`./commands/${cmd}.js`)];

        let ops = {
            ownerID: ownerID,
            active: active
        }

        let commandFile = require (`./commands/${cmd}.js`);
        commandFile.run(client, message, args, ops);

    } catch (e) {
        console.log(e.stack);
    }

});

client.login(process.env.TOKEN);
