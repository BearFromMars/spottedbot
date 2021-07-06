require('dotenv').config();
const { Client, Message, MessageMentions, Guild, GuildMemberRoleManager, GuildMember } = require('discord.js');
const client = new Client();

client.on('error',(err) => console.log(err))

client.on('message', function(message) {
        message.member.roles.add(message.guild.roles.cache.find(r => r.id === '854958558113562624'))
});


client.on('error',(err) => console.log(err))