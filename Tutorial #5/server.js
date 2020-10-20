const Discord = require("discord.js");
const client = new Discord.Client();
//UPTIME ROBOT (WEB)
const { get } = require("snekfetch");
const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  console.log("Pinging");
  response.sendStatus(200);
})
app.listen(process.env.PORT);
setInterval(() => {

http.get('live app http');
}, 280000);

client.on("ready", async () => {
  console.log(`${client.user.tag} sudah online!`);
  client.user.setActivity("Jangan Lupa Subscribe");
});

client.on("message", async message => {
  if (message.content === "indonesia") message.reply(":flag_id:");
//COMMAND BOT DI SERVER.JS
const prefix = "!"
if(!message.content.startsWith(prefix)) return null;
let msg = message.content.toLowerCase();
let args = message.content.slice(prefix.length).trim().split(" ");
let cmd = args.shift().toLowerCase();
let command = cmd;

if(command === "ping") {
message.reply(`:ping_pong: Pong! ${client.ws.ping}ms`)
}

});
client.login(process.env.TOKEN);
