const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("519518820004790292")
setInterval(function() {
channel.send(`Fuck You Faisal .Com`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
