module.exports = {
  data: {
    name: `modal-popup`,
  },
  async execute(interaction, client) {
    await interaction.reply({
      content: `Sua mensagem é: ${interaction.fields.getTextInputValue(
        "msg"
      )}`,
    });
  },
};
