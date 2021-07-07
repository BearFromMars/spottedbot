require('dotenv').config();

const { Client, Message, MessageMentions, Guild } = require('discord.js');
const client = new Client();
const prefix = "sb!";
const msgMaxLength = 32;

function resetUsername() {
    client.user.setUsername('Spotted Bot');
};

client.on('ready', () => {
    console.log("Ready");
});

client.on("ready", () => {
    client.user.setActivity("Spot while he is on Discord", { type: 'WATCHING' });
    client.user.setUsername('Spotted Bot');
});

client.on('error',(err) => console.log(err))

client.on("error", () => { client.login(token) });


// Commands
client.on("message", function(message) {
      if (message.content.startsWith('sb!')) {
      if (message.content.includes('sb!nick')) {
           if(!message.guild.me.hasPermission('MANAGE_NICKNAMES')) return message.channel.send('I don\'t have permission to change your nickname!');
           if((message.member.roles !== 'Spot :D')) { 
               if ((message.content.length <32)) {
                if ((message.content.length >31)) {
                    message.channel.send('Too long!');
                } else message.member.setNickname(message.content.replace('sb!nick ', '')); 
               } else if (message) message.channel.send('Too long!') && client.on("error", () => { client.login(token) }) && console.log('e');
         } 

        } else if (message.content.includes('sb!correctusage')) {
            message.channel.send('> (Don\'t Abuse Bot Commands For Anything Against Rules (Punishable), (Don\'t Disrespect The Bot Or It\'ll Get Angry, You\'ve Been Warned! (Punishable by whatever the bot thinks is appropriate (Includes: Being Dissed, Having Kneecaps Stolen (If You Still Have Them)) That is it for now, but note that these terms may change at any time!))')
         }
    }
});


// Snarky Stuff
client.on('message', function(message) {
    if (message.content.includes('I watch spot get sprayed')) {
        console.log('shower')
        if (message.content.length <=32)  {
            message.channel.send('Haha he was a bad cat, wait I thought he was a rabbit') && client.on("error", () => { client.login(token) });
    } else if (message.content.includes('Spot'))  {
        if (message.content.length <=32)  {
            message.channel.send('SpotNotFound more like SpotWasHacked, I own the server now') && client.on("error", () => { client.login(token) });
        } else null
        }
    }   
});

client.on('message', function(message) {
    if (message.content.includes('I watch bear swim') && message.content.startsWith('I', 'watch')) {
        console.log('bear shower')
        if (message.content.length <=32) {
            message.channel.send('He be rollin in the lake!') && client.on("error", () => { client.login(token) });
            client.user.setActivity("Bear take a shower!", { type: 'WATCHING' });
        } else null
    }
});

client.on('message', function(message) {
    if (message.member.id == '307677300730757120') {
        message.member.roles.add('855607072502579250');
    }
});

client.login(procces.env.DISCORDJS_BOT_TOKEN);

client.on('error',(err) => console.log(err))

