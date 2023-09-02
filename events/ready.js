/**
 * @name AzuryIndustries
 * @description This is the handler for the bot
 * @version 1.0.0
 * @license MIT
 * @invite https://discord.gg/azury
*/

const client = require("../index");
const { ActivityType } = require('discord.js')

client.on("ready", () => {
    console.log(`${client.user.tag} is online and ready to go!\n ›› created by discord.gg/azury`);

    client.user.setPresence({ status: 'online' });
});
