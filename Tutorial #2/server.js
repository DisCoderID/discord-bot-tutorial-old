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
http.get(`https://${process.env.PROJECT_DOMAIN}.glitch.me`);
}, 280000);

client.on("ready", async () => {
  console.log(`${client.user.tag} sudah online!`);
  client.user.setActivity("Jangan Lupa Subscribe");
});

client.on("message", async message => {
  if (message.content === "indonesia") message.reply(":flag_id:");
});
client.login("bot token");
