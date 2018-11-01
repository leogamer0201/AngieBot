const Discord = require('discord.js');

exports.run = (client, message, args) => {
  
  let embed = new Discord.RichEmbed()
    .setColor([254, 0, 107])
    .setThumbnail(client.user.avatarURL)
    .setDescription("<:discord:465795559559528449> > :rocket: Angie")
    .addField(":desktop: Servidores:", client.guilds.size, true)
    .addField(":joystick: Usuários:", client.users.size, true)
    .addField("<:chat:500682778128678952> Canais:", client.channels.size, true)
    .addField(":robot: Versão:", "v2.0.0 - Beta", true)
    .addField(":flag_pt: País:", "Portugal", true)
    .addField("<:js:500684431925706762> Linguagem:", "JavaScript - NodeJS", true)
    .addField(":crown: Criador:", "<@458250352215588866>", true)
    .addField(":pencil: Prefix:", "Use **!!**", true)
    .addField(":date: Criado em:", client.user.createdAt, true)
    .setURL("[Servidor Suporte](https://discord.gg/UUEa4VJ)")
    .setFooter(`🚀 ${client.user.username}`, client.user.AvatarURL)
    .setTimestamp();
  message.channel.send(embed);

}