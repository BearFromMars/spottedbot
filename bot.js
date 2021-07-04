require('dotenv').config();

const config = require('./config.json')

const { Client, Message } = require('discord.js');
const client = new Client();

client.login(config.token);

client.on('ready', () => {
    console.log("Bot Logged In");
});

