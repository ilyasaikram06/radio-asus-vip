const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

client.login(process.env.NDYzNTcxODM0OTgyNDk4MzA0.DhyWnA.j_i-1xBMd6zN_q3s8DOat5JwMFw);
