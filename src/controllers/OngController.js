const crypto = require("crypto");
const connection = require("../database/connection");

module.exports = {
  async create(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;
    const id = crypto.randomBytes(4).toString("HEX");
    console.log(id);
    

    //Conexão com o banco
    await connection("ongs").insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    });

    return res.json({
      id,
    });
  },
  async listagem(req, res) {
    const ongs = await connection("ongs").select("*");

    return res.json(ongs);
  },
};
