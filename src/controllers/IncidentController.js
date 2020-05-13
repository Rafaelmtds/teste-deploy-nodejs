const connection = require("../database/connection");

module.exports = {
  async create(req, res) {
    const { title, description, value } = req.body;
    const ong_id = req.headers.authorization;

    //Conexão com o banco
    const [id] = await connection("incidents").insert({
      title,
      description,
      value,
      ong_id,
    });

    return res.json({
      id,
    });
  },

  async listarCasos(req, res) {
    const { page = 1 } = req.query;
    const [quantidade] = await connection("incidents").count();

    const casos = await connection("incidents")
      .join("ongs", "ongs.id", "=", "incidents.ong_id")
      .limit(5)
      .offset((page - 1) * 5)
      .select([
        "incidents.*",
        "ongs.name",
        "ongs.email",
        "ongs.whatsapp",
        "ongs.city",
        "ongs.uf",
      ]);

    res.header("X-Total-Count", quantidade["count(*)"]);
    return res.json(casos);
  },

  async recuperarCaso(req, res) {
    const id = req.query.id;

    const caso = await connection("incidents").select("*").where("id", id);
    return res.json(caso);
  },

  async delete(req, res) {
    const idOng = req.headers.authorization;
    const { idCaso } = req.params;
    
    const caso = await connection("incidents").select("*").where("id", idCaso);
    
    if (caso[0].ong_id == idOng) {
      await connection("incidents").where("id", idCaso).del();
      return res.status(204).send();
    } else {
      return res.status(401).json({ erro: "Operação não autorizada" });
    }
  },
};
