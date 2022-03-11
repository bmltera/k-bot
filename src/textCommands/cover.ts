import { Message } from "discord.js";

(module).exports = {
    name: 'cover',
    description: "shows a cover",

    async execute(message :any , args:any){
        let coverList = require(`${__dirname}/../json_data/covers.json`);
        let coverNum = Math.floor(Math.random() * coverList.covers.length);
        let coverName = coverList.covers[coverNum].name;
        let coverURL = coverList.covers[coverNum].url;

        message.channel.send(coverName + " " + coverURL)
    }
}