const messageTemplates = {
    start: {
        text: `Hello and welcome to our Telegram Web 3.0 App 🥳\nYou can run our app by clicking the "Start" button below\nHave a nice day! 🇲🇽
        `,
        buttons: [
            [
                {text: "Start", callback_data: "start_query"}, 
                {text: "Rate us", callback_data: "rate"}
            ],
        ]
        
    }
}

export default messageTemplates;