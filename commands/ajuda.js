const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

  const ajuda = new Discord.RichEmbed()
            .setColor([254, 0, 107])
            .setThumbnail(client.user.avatarURL)
            .setAuthor(message.author.username, message.author.avatarURL)
            .setTimestamp()
            .setTitle(":open_hands: **Está precisando de ajuda ou até mesmo querendo reportar um membro? Então você veio ao lugar certo!**")
            .addField("📱» Dúvidas", "Para qualquer tipo de dúvida relacionada ao servidor.")
            .addField(":bell: » Sugestão", "Para fazer uma sugestão.")
            .addField("📝 » Denuncia", "Para denunciar um jogador.")
            .addField(":rocket: » Tag", "Para fazer o pedido de alguma tag.")
            .setFooter(`🚀 ${client.user.username}`, client.user.avatarURL);
        message.channel.send({embed: ajuda}).then(msg=>{
            msg.react('📱').then(r=>{
            msg.react('🔔')
            msg.react('📝')
            msg.react('🚀')
        })

        const tagfilter = (reaction, user) => reaction.emoji.name === '🚀' && user.id === message.author.id;
        const denunciafilter2 = (reaction, user) => reaction.emoji.name === '📝' && user.id === message.author.id;
        const sugestãofilter3 = (reaction, user) => reaction.emoji.name === '🔔' && user.id === message.author.id;
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
                .setTitle("📱 » Para qualquer tipo de dúvida relacionada com o servidor.")
                .setDescription("Opa carinha, se você está lendo isso é porque tem uma dúvida não é mesmo? Use `!!duvida <suaduvida>` que um staffer irá abrir um canal com você.")
                .setFooter(`🚀 ${client.user.username}`, client.user.avatarURL);
                msg.edit(dúvida);
            })
        sugestão.on('collect', r => { 
        const sugestão = new Discord.RichEmbed()
                .setColor([254, 0, 107])
                .setThumbnail(client.user.avatarURL)
                .setTimestamp()
                .setTitle("🔔 » Para fazer sugestão.")
                .setDescription("Opa carinha, se você está lendo isso é porque tem uma sugestão não é mesmo? Use `!!sugerir <suasugestão>` que um staffer irá abrir um canal com você.")
               .setFooter(`🚀 ${client.user.username}`, client.user.avatarURL);
                msg.edit(sugestão);
            })
        denuncia.on('collect', r => { 
        const denuncia = new Discord.RichEmbed()
                .setColor([254, 0, 107])
                .setThumbnail(client.user.avatarURL)
                .setTimestamp()
                .setTitle("📝 » Para denunciar um jogador.")
                .setDescription("Opa carinha, se você está lendo isso é porque tem uma denuncia a fazer não é mesmo? Use `!!report <membro> <motivo>` que um staffer irá analisar a sua denuncia.")
               .setFooter(`🚀 ${client.user.username}`, client.user.avatarURL);
                msg.edit(denuncia);
            })
        tag.on('collect', r => { 
        const tag = new Discord.RichEmbed()
                    .setColor([254, 0, 107])
                    .setThumbnail(client.user.avatarURL)
                    .setTimestamp()
                    .setTitle("🚀 » Para fazer o pedido de alguma tag.")
                    .setDescription("Opa carinha, se você está lendo isso é porque você quer sua tag não é mesmo? Use `!!tag <tag>` que um staffer irá abrir um canal com você.")
                    .setFooter(`🚀 ${client.user.username}`, client.user.avatarURL);
                    msg.edit(tag);
                })
            })
        }
        
        module.exports.ajuda = {
            nome: "ajuda"
        }
        