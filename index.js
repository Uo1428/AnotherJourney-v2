/**
 * @name AzuryIndustries
 * @description MidJourney But Free
 * @version 1.0.0
 * @license MIT
 * @invite https://discord.gg/azury or .gg/uoaio
 */

const {
    Client,
    GatewayIntentBits: gib,
    Collection
} = require("discord.js");
require("dotenv").config()

const client = new Client({
    intents: [
        gib.Guilds,
        gib.GuildEmojisAndStickers,
        gib.DirectMessages,
        gib.GuildBans,
        gib.MessageContent,
        gib.GuildInvites,
        gib.GuildWebhooks,
        gib.GuildMessages,
        gib.GuildMembers,
        gib.GuildIntegrations,
        gib.GuildVoiceStates,
        gib.GuildMessageReactions
    ],
});

module.exports = client;

// // Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");

// // Initializing the project
require("./handler/index")(client);

client.login(client.config.token || process.env.TOKEN);