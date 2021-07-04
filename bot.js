require('dotenv').config();

const { Client, Message } = require('discord.js');
const client = new Client();



client.on('ready', () => {
    console.log("t");
});

client.login(process.env.DISCORDJS_BOT_TOKEN);