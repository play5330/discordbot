const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === '!공유') {

       message.reply('https://discordapp.com/channels/533886195206324227/533886195722092555');

       }

});

 


client.login(process.env.BOT_TOKEN);
