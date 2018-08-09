// discord
const discord = require('discord.js')
const mainClass = require('./mainClass.js')
const bot = mainClass.bot

// other requirements
const fs = require('fs')
const databaseFile = fs.readFileSync('./database.json')
let database = JSON.parse(databaseFile)

// main
let orderProcess = (x)=>{
	y = x.substr(0, 1)
	if(y in database){
		z = x.substr(1)
		if(z in database[y]){
			try{
				usr = bot.fetchUser('443142940252962818').then(botusr =>{bot.fetchUser(443142940252962818)})
				console.log(usr)
				usr.send("Stuff worked, yay. The bloke wants " + database[y][z] + ".")
			}catch(error){
				msg = "Stephen tried. Something went wrong: " + error
				return msg
			}
		}
	}
}

let order = (x, y)=>{
	msg = orderProcess(y)
	x.channel.send(msg)
}

module.exports.order = order