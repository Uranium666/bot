const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("autocomplete")
    .setDescription("Função de autocompletar mensagens")
    .addStringOption((option) =>
      option
        .setName("colour")
        .setDescription("Autocompleta com uma cor.")
        .setAutocomplete(true)
        .setRequired(true)
    ),
  async autocomplete(interaction, client) {
    const focusedValue = interaction.options.getFocused();
    const choices = ["vermelho", "azul", "amarelo", "roxo", "verde"];
    const filtered = choices.filter((choice) =>
      choice.startsWith(focusedValue)
    );
    await interaction.respond(
      filtered.map((choice) => ({ name: choice, value: choice }))
    );
  },
  async execute(interaction, client) {
    const option = interaction.options.getString("colour");
    await interaction.reply({ content: `Testando a cor "${option}"` });
  },
};
