import TelegramBot from "node-telegram-bot-api";
import messageTemplates from "./layout/assets/templates/messages.js";

const token = process.env.TOKEN;

let bot = new TelegramBot(token, {polling: true})

bot.on("message", async (msg) => {
    
    let chatID = msg.chat.id;

    if (msg.text == "/start") {
        bot.sendPhoto(chatID, 'AgACAgIAAxkBAAMMZxEmgbDMyHYQPwgd_1V79cfsfV4AApLkMRvyG4lIz2ZSGML7bKgBAAMCAAN4AAM2BA', 
            {
                caption: messageTemplates.start.text,
                reply_markup: {
                    inline_keyboard: messageTemplates.start.buttons
                }
            }
        );
    }
    
    console.log(msg);
});