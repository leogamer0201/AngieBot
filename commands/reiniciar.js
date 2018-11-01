const Discord = require("discord.js");

const token = ("Seu Token aqui")

const ownerID = 'Seu ID aqui'

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
