const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    const verificationLevel = message.guild.verificationLevel;
    const verificationLevels = ['None', 'Easy', 'Medium', 'High', 'Extreme']

    const embed = new Discord.RichEmbed()
    .setDescription(`${message.guild.name} Informações`)
    .setThumbnail(message.guild.iconURL())
    .setColor([254, 0, 107])
    .setFooter(`🚀 ${client.user.username}`, client.user.avatarURL)
    .setTimestamp()
    .addField('**:rocket: Nome:', `${message.guild.name}`, true)
    .addFiled(`**:rocket: ID:**`, `${message.guild.id}`, true)
    .addField('**:rocket: Dono:**', `${message.guild.owner.user}`, true)
    .addField('**:rocket: ID-Dono:**', `${message.guild.owner.id}`, true)
    .addField('**:rocket: Membros:**', `${message.guild.members.filter(member => member.user.bot)} de ${message.guild.memberCount} membros`, true)
    .addField('**:rocket: Canais:**', `${message.guild.channels.filter(channel => channel.type === 'voice').size} Voz \n${message.guild.channels.filter(channel => channel.type === 'text').size} Texto`, true)
    .addField('**:rocket: Nível de verificado:**', `${verificationLevels[message.guild.verificationLevel]}`, true)
    .addField('**:rocket: Região:**', `${message.guild.region}`, true)
    .addField('**:rocket: Canal AFK:**', `${message.channel.afkChannel}`, true)
    .addField('**:rocket: Criado em:**', `${message.guild.createdAt}`, true)

    message.channel.send(embed);
}