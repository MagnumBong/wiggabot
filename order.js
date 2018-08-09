// discord
const discord = require('discord.js')
const mainClass = require('./mainClass.js')
const bot = mainClass.bot

// other requirements
const fs = require('fs')
const databaseFile = fs.readFileSync('./database.json')
let database = JSON.parse(databaseFile)
 
// main
let orderProcess = (x, i)=>{
	y = x.substr(0, 1)
	if(y in database){
		z = x.substr(1)
		if(z in database[y]){
			try{
				usr = Promise.resolve(bot.fetchUser('443142940252962818'))
				usr.then(function(value) {
  					console.log(value);
  					value.send("It worked. The bloke wants " + database[y][z] + ".")
				})
				return "Bossman been notified. Please doing business."
			}catch(error){
				msg = "Stephen tried. Something went wrong: " + error
				return msg
			}
		}
	}
}

let order = (x, y)=>{
	msg = orderProcess(y, x)
	x.channel.send(msg)
}

module.exports.order = order