const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

  const ajuda = new Discord.RichEmbed()
            .setColor([254, 0, 107])
            .setThumbnail(client.user.avatarURL)
            .setAuthor(message.author.username, message.author.avatarURL)
            .setTimestamp()
            .setTitle(":open_hands: **Está precisando de ajuda, ou de se divertir? Veio ao lugar certo!**")
            .addField("📱» Básico", "Comandos básicos.")
            .addField("⚽ » Diversão", "Comandos de diversão.")
            .addField("🎵 » Música", "Comandos de música.")
            .addField(":rocket: » Moderação", "Comandos de Admin/Moderação.")
            .setFooter(`🚀 ${client.user.username}`, client.user.avatarURL);
        message.channel.send({embed: ajuda}).then(msg=>{
            msg.react('📱').then(r=>{
            msg.react('⚽')
            msg.react('🎵')
            msg.react('🚀')
        })

        const tagfilter = (reaction, user) => reaction.emoji.name === '🚀' && user.id === message.author.id;
        const denunciafilter2 = (reaction, user) => reaction.emoji.name === '🎵' && user.id === message.author.id;
        const sugestãofilter3 = (reaction, user) => reaction.emoji.name === '⚽' && user.id === message.author.id;
        const dúvidafilter4 = (reaction, user) => reaction.emoji.name === '📱' && user.id === message.author.id;
        const inicialfilter5 = (reaction, user) => reaction.emoji.name === '💣' && user.id === message.author.id;
        const tag = msg.createReactionCollector(tagfilter, { time: 80000 });
        const denuncia = msg.createReactionCollector(denunciafilter2, { time: 80000 });
        const sugestão = msg.createReactionCollector(sugestãofilter3, { time: 80000 });
        const dúvida = msg.createReactionCollector(dúvidafilter4, { time: 80000 });
        const inicial = msg.createReactionCollector(inicialfilter5, { time: 80000 });

        dúvida.on('collect', r => { 
        const dúvida = new Discord.RichEmbed()
                .setColor([254, 0, 107])
                .setThumbnail(client.user.avatarURL)
                .setTimestamp()
                .setTitle("📱 » Comandos básicos.")
                .setDescription("**`ajuda`** » Abre o menu de ajuda. \n**`serverinfo`** » Veja as informações do servidor.")
                .setFooter(`🚀 ${client.user.username}`, client.user.avatarURL);
                msg.edit(dúvida);
            })
        sugestão.on('collect', r => { 
        const sugestão = new Discord.RichEmbed()
                .setColor([254, 0, 107])
                .setThumbnail(client.user.avatarURL)
                .setTimestamp()
                .setTitle("⚽ » Comandos de diversão.")
                .setDescription("**`avatar`** » Veja o avatar do usuário. \n**`perguntar`** » Pergunta qualquer coisa que o bot responde. \n**`kiss\beijar`** » Beija o usuário. \n**`rank`** » Veja seu rank com a 🚀Angie.")
               .setFooter(`🚀 ${client.user.username}`, client.user.avatarURL);
                msg.edit(sugestão);
            })
        denuncia.on('collect', r => { 
        const denuncia = new Discord.RichEmbed()
                .setColor([254, 0, 107])
                .setThumbnail(client.user.avatarURL)
                .setTimestamp()
                .setTitle("🎵 » Comandos de Música.")
                .setDescription("**`tocar`** » Desativado. \n**`parar`** » Desativado. \n**`lista`** » Desativado. \n**`resumo`** » Desativado. \n**`skip`** » Desativado.")
               .setFooter(`🚀 ${client.user.username}`, client.user.avatarURL);
                msg.edit(denuncia);
            })
        tag.on('collect', r => { 
        const tag = new Discord.RichEmbed()
                    .setColor([254, 0, 107])
                    .setThumbnail(client.user.avatarURL)
                    .setTimestamp()
                    .setTitle("🚀 » Comandos de Moderação.")
                    .setDescription("**`ban`** » Bane o usuário. \n**`kick`** » Kicka o usuário. \n**`mute`** » Muta o usuário. \n**`unmute`** » Desmuta o usuário. \n**`tempmute`** » Muta temporáriamente o usuário. \n**`aviso`** » Manda um aviso no canal 📢anuncios. \n**`say`** » Fala pelo bot. \n**`limpar`** » Limpa as mensagens do chat.")
                    .setFooter(`🚀 ${client.user.username}`, client.user.avatarURL);
                    msg.edit(tag);
                })
            })
        }
        
        module.exports.ajuda = {
            nome: "lista"
        }
        