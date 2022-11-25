const {
  SlashCommandBuilder,
  ModalBuilder,
  ActionRowBuilder,
  TextInputBuilder,
  TextInputStyle,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("modal")
    .setDescription("Abre um popup"),
  async execute(interaction, client) {
    const modal = new ModalBuilder()
      .setCustomId(`modal-popup`)
      .setTitle(`Insira uma mensagem abaixo`);

    const textInput = new TextInputBuilder()
      .setCustomId("msg")
      .setLabel(`Digite aqui!`)
      .setPlaceholder(`Escreva sua mensagem aqui!`)
      .setRequired(true)
      .setStyle(TextInputStyle.Short);

    modal.addComponents(new ActionRowBuilder().addComponents(textInput));

    await interaction.showModal(modal);
  },
};
