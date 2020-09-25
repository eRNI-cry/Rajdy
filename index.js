const Discord = require('discord.js');
let rekcje = false
const client = new Discord.Client();
let tet, ogien, woda, mrok, swiatlo, tiou, dobo, kanal, mesedz
client.login('NzU4MDQ2MTAyNTYwNzAyNTU2.X2pPcg.kxc5c7DbVkAGnKTtnJnbfOm9jtk')
client.once('ready', () => {
  console.log('Ruszamy!');
  tet = client.guilds.cache.find(guild => guild.id ==='432131267325329419')
  ogien = tet.emojis.cache.find(emoji => emoji.name === 'ogien');
  woda = tet.emojis.cache.find(emoji => emoji.name === 'woda');
  mrok = tet.emojis.cache.find(emoji => emoji.name === 'mrok');
  swiatlo = tet.emojis.cache.find(emoji => emoji.name === 'swiatlo');

});

client.once('message', message => {
if (message.content === '$start') {
  message.delete()
  message.channel.send('Rajd na glacy?')
  .then(() => mesedz=message.channel.lastMessage)
  kanal = message.channel
  client.once('message', message => {
      message.react(ogien)
      message.react(woda)
      message.react(mrok)
      message.react(swiatlo)
      //.then(() => lecymy(message))
    })
  }
})
client.on('message', message => {
if (message.content === '$r') {
  message.delete()
  mesedz.delete()
  message.channel.send('Rajd na glacy?')
  .then(() => mesedz=message.channel.lastMessage)
  kanal = message.channel
  client.once('message', message => {
      message.react(ogien)
      message.react(woda)
      message.react(mrok)
      message.react(swiatlo)
      //.then(() => lecymy(message))
    })
  }
})
client.on("messageReactionAdd", (e, n) => {
      if (n && !n.bot && e.message.channel.guild)
      if (e.emoji.name == 'ogien') {
            e.message.channel.send('Za ile boss?')
            .then(() => r = e.message.channel.lastMessage)
            const zbierak = new Discord.MessageCollector(e.message.channel, m => m.author.id != 758046102560702556 && m.channel == kanal, {time: 60000});
            zbierak.on('collect', message => {
              dobo = message.content
              var cz = new Date();
              var statek = 5-cz.getMinutes()%5
              e.message.channel.send(`🚨Ogień na glacy! @everyone Pełna mobilizacja! Boss za ${dobo}min! Statek za ${statek}min🚨!`)
              .then(() => tiou = e.message.channel.lastMessage)
              setTimeout(() => {tiou.delete();}, (dobo+30)*60000)
              zbierak.stop()
              e.remove()
              e.message.react(ogien)
              r.delete()
              message.delete()
              })
            }

      else if (e.emoji.name == 'woda') {
            e.message.channel.send('Za ile boss?')
            .then(() => r = e.message.channel.lastMessage)
            const zbierak = new Discord.MessageCollector(e.message.channel, m => m.author.id != 758046102560702556 && m.channel == kanal, {time: 60000});
            zbierak.on('collect', message => {
              dobo = message.content
              var cz = new Date();
              var statek = 5-cz.getMinutes()%5
              e.message.channel.send(`🚨Woda na glacy! @Cult Pełna mobilizacja! Boss za ${message.content}min! Statek za ${statek}min!🚨`)
              .then(() => tiou = e.message.channel.lastMessage)
              setTimeout(() => {tiou.delete();}, (dobo+30)*60000)
              zbierak.stop()
              e.remove()
              e.message.react(woda)
              r.delete()
              message.delete()
              })
            }
      else if (e.emoji.name == 'mrok') {
            e.message.channel.send('Za ile boss?')
            .then(() => r = e.message.channel.lastMessage)
            const zbierak = new Discord.MessageCollector(e.message.channel, m => m.author.id != 758046102560702556 && m.channel == kanal, {time: 60000});
            zbierak.on('collect', message => {
              dobo = message.content
              var cz = new Date();
              var statek = 5-cz.getMinutes()%5
              e.message.channel.send(`🚨Mrok na glacy! @Cult Pełna mobilizacja! Boss za ${message.content}min! Statek za ${statek}min!🚨`)
              .then(() => tiou = e.message.channel.lastMessage)
              setTimeout(() => {tiou.delete();}, (dobo+30)*60000)
              zbierak.stop()
              e.remove()
              e.message.react(mrok)
              r.delete()
              message.delete()
              })
            }
      else if (e.emoji.name == 'swiatlo') {
            e.message.channel.send('Za ile boss?')
            .then(() => r = e.message.channel.lastMessage)
            const zbierak = new Discord.MessageCollector(e.message.channel, m => m.author.id != 758046102560702556 && m.channel == kanal, {time: 60000});
            zbierak.on('collect', message => {
              dobo = message.content
              var cz = new Date();
              var statek = 5-cz.getMinutes()%5
              e.message.channel.send(`🚨Światło na glacy! @Cult Pełna mobilizacja! Boss za ${message.content}min! Statek za ${statek}min!🚨`)
              .then(() => tiou = e.message.channel.lastMessage)
              setTimeout(() => {tiou.delete();}, (dobo+30)*60000)
              zbierak.stop()
              e.remove()
              e.message.react(swiatlo)
              r.delete()
              message.delete()
              })
            }
});



// function lecymy(wiad_bota) {
//   const filtr = (user) => user.id != '758046102560702556';
//   const zbierak = wiad_bota.createReactionCollector(filtr)
//   rekcje = true
//   while (true) {
//     zbierak.on('collect', r => console.log(r.emoji.name))
//   }
// }




function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
