const Discord = require('discord.js');

exports.run = (client, message, args) => {



  
if (args.length === 0) return message.channel.send("Use: `a!reload <command>`");
  
try {
  delete require.cache[require.resolve(`./${args[0]}`)];
} catch (e) {
  return message.channel.send(`**__Reiniciando__»** Comando não encontrado: **${args[0]}.js**`);
}
  
message.channel.send(`**__Reiniciando__»** Comando reiniciado: **${args[0]}.js**`);
}