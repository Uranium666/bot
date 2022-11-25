const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("embed")
    .setDescription("Mostra uma mensagem incorporada"),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setTitle(`Título que serve como link`)
      .setDescription("Espaço para adicionar uma descrição")
      .setColor(0x18e1ee)
      .setImage(client.user.displayAvatarURL())
      .setThumbnail(client.user.displayAvatarURL())
      .setTimestamp(Date.now())
      //Nome do autor se torna um link
      .setAuthor({
        url: `https://www.youtube.com/`,
        iconURL: interaction.user.displayAvatarURL(),
        name: interaction.user.tag,
      })
      .setFooter({
        iconURL: client.user.displayAvatarURL(),
        text: client.user.tag,
      })
      //Mensagem principal
      .setURL(
        `https://www.youtube.com/`
      )
      .addFields([
        {
          name: `Subtítulo`,
          value: `Sub-descrição`,
          inline: true,
        },
        /*
        {
          name: `teste3`,
          value: `teste4`,
          inline: true,
        },
        */
      ]);
    await interaction.reply({
      embeds: [embed],
    });
  },
};
