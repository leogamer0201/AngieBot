const Discord = require("discord.js");

const token = ("NDk4MjE5MzU5NjM0OTgwOTAx.DprMXg.-Q_H9Vqkesa6R8oIpzKsB60JOuo")

const ownerID = '458250352215588866'

module.exports.run = async (client, message, args) =>{
  
    if(args[0] == "help"){
      message.reply("**❓ | Use: !!reiniciar**");
      return;
    }

  if (message.author.id !== ownerID) return message.channel.send(":x: **|** Você não tem permissão para poder executar esse comando!").then(deletar =>{
          deletar.delete(10000)})

process.exit(1).then(iniciar=>{
    client.login(`${token}`)
})
}

module.exports.ajuda = {
    nome: "reiniciar"
}