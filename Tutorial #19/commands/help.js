const { MessageEmbed } = require('discord.js')
const { Menu } = require('discord.js-menu')
exports.run = async (client, message) => {
  let embed1 = new MessageEmbed()
  .setTitle('Help Commands')
  .setColor('BLUE')
  .setThumbnail(client.user.displayAvatarURL({format: 'png', dynamic: true})+"?size=2048")
  .setDescription('Ini adalah beberapa command yang tersedia') //ini cuma contoh
  .addField('Core', '`ping` `stats` `help`', true)
  
  let embed2 = new MessageEmbed()
  .setTitle('Help Commands')
  .setColor('BLUE')
  .setThumbnail(client.user.displayAvatarURL({format: 'png', dynamic: true})+"?size=2048")
  .setDescription('Ini adalah beberapa command yang tersedia') //ini cuma contoh
  .addField('Fun', '`8ball` `cat` `dog`', true)
  
  let embed3 = new MessageEmbed()
  .setTitle('Help Commands')
  .setColor('BLUE')
  .setThumbnail(client.user.displayAvatarURL({format: 'png', dynamic: true})+"?size=2048")
  .setDescription('Ini adalah beberapa command yang tersedia')
  .addField('Music', '`play` `pause` `stop`', true)
  
  new Menu(message.channel, message.author.id, [
            {
                name: "main",
                content:embed1,
                reactions: {
                    "⏹": "stop",
                    "▶": "next"
                }
            },
            {
                name: "otherPage",
                content: embed2,
                reactions: {
                    "⏹": "stop",
                    "◀": "previous",
                    "▶": "next"
                }
            },
            {
                name: "otherPageAgain",
                content: embed3,
                reactions: {
                    "⏹": "stop",
                    "◀": "previous"
                }
            }
        ]);
}
