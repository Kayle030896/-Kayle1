const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "queue",
  cooldown: 5,
  aliases: ["q"],
  description: "Show the music queue and now playing.",
  async execute(message) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.channel.send("❌ **Nothing playing in this server**");

    let currentPage = 0;
    const embeds = generateQueueEmbed(message, queue.songs);

    const queueEmbed = await message.channel.send(
      `**Current Page - ${currentPage + 1}/${embeds.length}**`,
      embeds[currentPage]
    );
  }
}

function generateQueueEmbed(message, queue) {
  let embeds = [];
  let k = 10;

  for (let i = 0; i < queue.length; i += 10) {
    const current = queue.slice(i, k);
    let j = i;
    k += 10;

    const info = current.map((track) => `${++j} - [${track.title}](${track.url})`).join("\n");

    const embed = new MessageEmbed()
      .setTitle("Song Queue\n")
      .setThumbnail(message.guild.iconURL())
      .setColor("ff0000")
      .setDescription(`**Current Song - [${queue[0].title}](${queue[0].url})**\n\n${info}`)
      .setTimestamp();
    embeds.push(embed);
  }

  return embeds;
}