module.exports = {
  name: "ping",
  aliases: ["pi"],
  cooldown: 10,
  description: "Show the bot's average ping",
  execute(message) {
    message.reply(`📈 Pong: ${Math.round(message.client.ws.ping)} ms`).catch(console.error);
  }
};
