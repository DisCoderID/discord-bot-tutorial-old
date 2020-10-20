const { MessageEmbed } = require('discord.js')

exports.run = async (client, message) => {
  let embed = new MessageEmbed()
  .setTitle('Help Commands')
  .setColor('BLUE')
  .setThumbnail(client.user.displayAvatarURL({format: 'png', dynamic: true})+"?size=2048")
  .setDescription('Ini adalah beberapa command yang tersedia') //ini cuma contoh
  .addField('Core', '`ping` `stats` `help`', true)
  .addField('Fun', '`8ball` `cat` `dog`', true)
  .addField('Music', '`play` `pause` `stop`', true)
  message.channel.send(embed)
}
