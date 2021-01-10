const tb = require("tb93");
const fs = require("fs");

let bot = new tb.Trollbox(new tb.User("Steve Ballmer", "LightBlue;bot"),true);
let prefix = "!";

bot.on_message = msg => {
  var command = msg.content.toLowerCase();
  if (command === "Steve Ballmer") {
  fs.readFile(__dirname + "/commands/mention.txt", 'utf8' , (err, data) => {
  if (err) {
    bot.send("Error:\n" + err.toString())
  }
  bot.send(data);
  })
  }

  if (command === prefix + "help") {
  fs.readFile(__dirname + "/commands/help.txt", 'utf8' , (err, data) => {
  if (err) {
    bot.send("Error:\n" + err.toString())
  }
  bot.send(data);
  })
  }

  if (command === prefix + "botinfo") {
  fs.readFile(__dirname + "/commands/botinfo.txt", 'utf8' , (err, data) => {
  if (err) {
    bot.send("Error:\n" + err.toString())
  }
  bot.send(data);
  })
  }

  if (command === prefix + "news") {
  fs.readFile(__dirname + "/commands/news.txt", 'utf8' , (err, data) => {
  if (err) {
    bot.send("Error:\n" + err.toString())
  }
  bot.send(data);
  })
  }

  if (command === prefix + "ping") {
    bot.send("So, this awfull, the ping command not works very well so we disable it.");
  }  
};

bot.on_error = err => { bot.send("Error:\n" + err.toString()) }

bot.connect();
console.log("Bot online!")