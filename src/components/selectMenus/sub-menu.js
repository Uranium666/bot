module.exports = {
  data: {
    name: `sub-menu`,
  },
  async execute(interaction, client) {
    await interaction.reply({
      //menu de seleção usando array, 0 sendo apenas 1 opção
      content: `${interaction.values[0]}`,
    });
  },
};
