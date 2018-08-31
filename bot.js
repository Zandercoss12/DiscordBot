const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

client.on('ready',() => {
  client.user.setPresence({game: {name: "t!help for commands!", type:0}});
  });
  
client.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  
const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

if(command === "info") {
  var embed = new Discord.RichEmbed()
    .addField("Hello. I am Toastys Bot.", "I help people" , true)
    .addField("Please use me wisely and carefully.", "Thank you for inviting me" , true)
    .setColor(0x00FFFF)
  message.channel.sendEmbed(embed);
}

if(command === "help") {
  var embed = new Discord.RichEmbed()
    .addField("Hello, here are a list of commands." , true)
    .addField("t!comands" , true)
    .setColor(0x00FFFF)
  message.channel.sendEmbed(embed);
}

//  /n == New line
//  you can even do message.channel.sendMessage("```Hello```");
}

});

setInterval(() => {
  http.get('http://discordjs-heroku.herokuapp.com');
}, 900000);

const port = process.env.PORT || 5000;

client.login(process.env.BOT_TOKEN);
