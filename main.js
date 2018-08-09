// discord
const discord = require('discord.js')
const mainClass = require('./mainClass.js')
const bot = mainClass.bot

// plugins
const order = require('./order.js')

// other requirements
const fs = require('fs')

// main
bot.on('ready', ()=>{
	bot.user.setGame("MC Mental.")
})

bot.on('message', (x)=>{
	if(x.content.startsWith('/')){
		order.order(x, x.content.substr(1))
	}
})