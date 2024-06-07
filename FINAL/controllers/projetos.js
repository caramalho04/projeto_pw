const fs = require('fs');
const { Deserializer } = require('v8');

//devolve todos os projetos
exports.getAll = async (req, res) => {
    //ler o ficheiro local
    const datajson = fs.readFileSync("data/local/data.json", "utf-8");
    //parse do json
    const data = JSON.parse(datajson);
    //devolver os projetos
    return res.send(data.projetos);
}


//devolve o projetos com o id
exports.getById = async (req, res) => {
    //obter o id do projetos
    const id = req.params.id;
    //ler o ficheiro local
    const datajson = fs.readFileSync("data/local/data.json", "utf-8");
    //parse do projetos
    const data = JSON.parse(datajson);
    //procurar um projetos com o id
    const projetos = data.projetos.filter(projetos => projetos.id == id);
    //devolve o projetos
    res.send(projetos);
}


//cria um projetos
exports.create = async (req, res) => {
    //obter o projetos pelas características enviadas
    const {id, Nome, Descricao, Estado} = req.body;
     //ler o ficheiro local
     const datajson = fs.readFileSync("data/local/data.json", "utf-8");
     //parse do json
     const data = JSON.parse(datajson);
     //adicionar projetos à lista
    data.projetos.push(req.body);
    //Criar o novo ficheiro com o projetos adicionado
    fs.writeFileSync('data/local/data.json', JSON.stringify(data));
    //devolve o novo projetos
    return res.status(201).send(req.body);
}


//atualiza o projetos
exports.update = async (req, res) => {
    //obter os projetos pelas características enviadas
    const {id, Nome, Descricao, Estado } = req.body;
     //ler o ficheiro local
     const datajson = fs.readFileSync("data/local/data.json", "utf-8");
     //parse do json
     const data = JSON.parse(datajson);
     //procurar o projetos para actualizar
    const projetos = data.projetos.find(projetos => projetos.id == id);
    //atualizar as caraterísticas
    projetos.Nome = Nome;
    projetos.Descricao = Descricao;
    projetos.Estado =  Estado;
    //actualizar no ficheiro json
    fs.writeFileSync('data/local/data.json', JSON.stringify(data));
    //devolver o projetos alterado
    return res.send({id, Nome, Descricao, Estado});
}


//apaga o projetos com o id
exports.delete = async (req, res) => {
    //obter o id do projetos
    const id = req.params.id;
     //ler o ficheiro local
     const datajson = fs.readFileSync("data/local/data.json", "utf-8");
     //parse do json
     const data = JSON.parse(datajson);
     //procurar o indice do projetos a ser procurada
    const projetosIndex  = data.projetos.findIndex(projetos => projetos.id == id);
     // Verifique se o carro foi encontrado
    if (projetosIndex !== -1) {
        // Exclua o estudante do array de estudantes
        const apagaProjeto = data.projetos.splice(projetosIndex, 1)[0];
        // Atualize o ficheiro json
        fs.writeFileSync('data/local/data.json', JSON.stringify(data));
        // Retorne o projetos excluído como resposta
        return res.status(200).send(apagaProjeto);
    } else {
        // Caso o projeto não seja encontrado, retorne uma resposta de erro
        return res.status(404).send("Projeto não encontrado");
    }
}
