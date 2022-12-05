import TeleBot from "telebot"

const bot = new TeleBot(process.env.TELEGRAM_BOT_TOKEN)

bot.on('/start',(msg) => {
     bot.sendSticker(chatId,`https://tlgrm.eu/_/stickers/375/374/37537478-18f8-4d53-9dc4-99508f460f18/192/5.webp`)
     return bot.sendMessage(chatId, `Salom, ${msg.from.first_name} Amir yaratgan botga xush kelipsiz!`)
})

export default bot
