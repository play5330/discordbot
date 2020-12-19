const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === '!규칙') {

       message.reply('여기는 성과를 올리는 채팅방입니다.\n그림, 글, 게임 등등의 성과를 올리면 됩니다.\n기만질에 해당하는 비틱질은 삭제됩니다.\n예)롤 펜타킬=비틱X, 가챠 10연차만에 한정뽑음 ㅎㅎ=비틱O');

       }

});

 


client.login(process.env.BOT_TOKEN);
