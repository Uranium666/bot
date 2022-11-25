const {
  SlashCommandBuilder,
  PermissionFlagsBits,
  PermissionsBitField,
  enableValidators,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("permission")
    .setDescription("Configura a permissão de cargos ou pessoas")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
  async execute(interaction, client) {
    const { roles } = interaction.member;
    const role = await interaction.guild.roles
      .fetch("403925560708825089")
      .catch(console.error);

    const testRole = await interaction.guild.roles
      .create({
        name: `Test`,
        permission: [PermissionsBitField.Flags.KickMembers],
      })
      .catch(console.error);

    //Possui cargo
    if (roles.cache.has(403925560708825089)) {
      await interaction.defReply({
        fetchReply: true,
      });
      await roles.remove(role).catch(console.error);
      await interaction.editReply({
        content: `${role.name} foi removido`,
      });
    } else {
      await interaction.reply({
        content: `Você não possui o cargo ${role.name}`,
      });
    }

    await roles.add(testRole).catch(console.error);

    await testRole
      .setPermissions([PermissionsBitField.Flags.BanMembers])
      .catch(console.error);

    const channel = await interaction.guild.channel.create({
      name: `teste?`,
      permissionOverwrites: [
        {
          id: interaction.guild.id,
          deny: [PermissionsBitField.Flags.ViewChannel],
        },
        {
          id: testRole.id,
          allow: [PermissionsBitField.Flags.ViewChannel],
        },
      ],
    });
    await channel.permissionOverwrites
      .edit(testRole.id, { SendMessages: false })
      .catch(console.error);
  },
};
