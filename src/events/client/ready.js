module.exports = {
  name: "ready",
  onde: true,
  async execute(client) {
    console.log(`Pronto! O bot ${client.user.tag} está logado e online.`);
  },
};