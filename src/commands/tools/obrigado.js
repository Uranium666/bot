const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("obrigado")
    .setDescription("Obrigado!"),
  async execute(interaction, client) {
    const message = await interaction.deferReply({
      fetchReply: true,
    });
    const newMessage = `Obrigado pela atenção! :grin:`;
    await interaction.editReply({
      content: newMessage,
    });
  },
};
