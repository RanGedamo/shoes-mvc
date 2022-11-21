const { adidas } = require('../model/adidas-model')

const getAllAdidas = (req, res) => {
    if (adidas && adidas != []) return res.send({ massage: "success", adidas })
    return res.send({ massage: "adidas not found" })
};
const findByIdAdidas = (req, res) => {
    const adidasById = adidas.find(adidasId => adidasId.id == req.params.id);
    if (adidasById) return res.send({ massage: "success", adidasById });
    return res.send({ massage: "adidas not found" });
};
const updateAdidas = (req, res) => {
    const adidasUpdate = adidas.find(adidasId => adidasId.id == req.params.id);
    const adidasIndex = adidas.indexOf(adidasUpdate);
    if (adidasIndex > -1) {
        adidas[adidasIndex] = req.body;
        return res.send({ massage: "success", adidas });
    };
    return res.send({ massage: "adidas not found" });
};
const deleteAdidas = (req, res) => { 
    const adidasRemove = adidas.find(adidasDel => adidasDel.id == req.params.id);
    const adidasIndex = adidas.indexOf(adidasRemove);
    if(adidasIndex>-1){
        adidas[adidasIndex] = req.body;
        return res.send({massage:"success",adidas});
    }
    return res.send({massage:"product adidas not found"});
};
const createAdidas = (req, res) => {
    if(adidas){
        adidas.push(req.body);
        return res.send({massage:"success",adidas})
    }
    return res.send({massage:"product not found"})
};

module.exports = {
    getAllAdidas,
    findByIdAdidas,
    updateAdidas,
    deleteAdidas,
    createAdidas
}