const fs = require('fs');

//devolve todos os projetos
exports.getAll = async (req, res) => {
    //ler o ficheiro local
    const datajson = fs.readFileSync("data/local/data.json", "utf-8");
    //parse do json
    const data = JSON.parse(datajson);
    //devolver os projetos
    return res.send(data.projetos);
}

//devolve por id
exports.getById = async (req, res) => {
    //obter o id do ficheiro
    const id = req.params.id;
    //ler o ficheiro local
    const datajson = fs.readFileSync("data/local/data.json", "utf-8");
    //parse do json
    const data = JSON.parse(datajson);
    //procurar o projeto
    const projeto = data.projetos.find(projeto => projeto.id == id);
    //devolver o projeto
    return res.send(projeto);
}

//criar um projeto
exports.create = async (req, res) => {
    //obter o projeto
    const { id, nome, estado, descricao } = req.body;
    const projeto = { id, nome, estado, descricao };
    
    //ler o ficheiro local
    const datajson = fs.readFileSync("data/local/data.json", "utf-8");
    //parse do json
    const data = JSON.parse(datajson);
    //adicionar o projeto
    data.projetos.push(projeto);
    //escrever no ficheiro
    fs.writeFileSync("data/local/data.json", JSON.stringify(data));
    //devolver o projeto
    return res.send(projeto);
}


