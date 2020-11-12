require('dotenv').config()
const Discord = require('discord.js')
const { generateEmojipasta } = require("./emojipasta/emojipasta")

const client = new Discord.Client()

client.once('ready', () => {
    console.log("Client ready")
})

client.on('message', (message) => {
    const msg = message.content;

    if (!msg) {
        return;
    }

    if (msg.length < 5) { // "!ep "
        return;
    }

    const substr = msg.substring(0, 4);
    if (substr !== "!ep ") {
        return;
    }
    
    const content = msg.substring(4, msg.length);

    const output = generateEmojipasta(content)

    message.delete()
    message.channel.send("From " + message.author.username + ":\n" + output)
})

client.login(process.env.DISCORD_BOT_TOKEN)

// https://discord.com/oauth2/authorize?client_id=123456789012345678&scope=bot