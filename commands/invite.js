module.exports = {
  name: "invite",
  aliases: ["inv"],
  cooldown: 10,
  description: "invite the Bot in your Guild",
  execute(message) {
    message.reply(`:link: *__[ Click on the link to add the bot ]__*\n**https://discord.com/api/oauth2/authorize?client_id=874954280782667786&permissions=8&scope=bot**`).catch(console.error);
  }
};