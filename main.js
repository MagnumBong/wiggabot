// discord
const discord = require('discord.js')
const mainClass = require('./mainClass.js')
const bot = mainClass.bot

// other requirements
const fs = require('fs')

// main
bot.on('ready', ()=>{
	bot.user.setGame("MC Mental.")
})