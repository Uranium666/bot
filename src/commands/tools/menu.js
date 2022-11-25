const {
  SlashCommandBuilder,
  SelectMenuBuilder,
  ActionRowBuilder,
  SelectMenuOptionBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("menu")
    .setDescription("Cria um menu de seleção"),
  async execute(interaction, client) {
    const menu = new SelectMenuBuilder()
      .setCustomId(`sub-menu`)
      .setPlaceholder(`Escolha entre as opções abaixo`)
      .setMinValues(1)
      .setMaxValues(1) //valor max de opções do menu para ser selecionado
      .setOptions(
        new SelectMenuOptionBuilder({
          label: `1° opção a ser selecionada`,
          value: `https://www.youtube.com/`, //ação a ser feita (cada ação deve ser diferente! !=vazio)
        }),
        new SelectMenuOptionBuilder({
          label: `2° opção a ser selecionada`,
          value: `https://www.youtube.com/markiplier`,
        })
      );

    await interaction.reply({
      components: [new ActionRowBuilder().addComponents(menu)],
    });
  },
};
