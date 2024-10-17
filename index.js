import TelegramBot from "node-telegram-bot-api";
import messageTemplates from "./layout/assets/json/messages.js";

const token = process.env.TOKEN;

let bot = new TelegramBot(token, {polling: true})

bot.on("message", async (msg) => {
    
    let chatID = msg.chat.id;

    if (msg.text == "/start") {
        bot.sendPhoto(chatID, 'https://chicagofancypaws.com/wp-content/uploads/2022/09/the-4-mexican-dog-breeds.jpg', 
            {
                caption: messageTemplates.start.text,
                reply_markup: {
                    inline_keyboard: messageTemplates.start.buttons
                }
            }
        );
    }
});