
const express = require('express');

const router = express.Router();

const gene2ensembl = require("../models/models");


router.route('/taxid/').get(async(req, res)=>{

    let {taxid} = req.query;

    let total = await gene2ensembl['gene2ensembl'].count({'taxid': taxid}).exec()
    console.log(total)

    let results = await gene2ensembl['gene2ensembl'].find({'taxid': taxid}).exec()
    
    res.json(results)
})

router.route('/entrez2ensembl/').get(async(req, res)=>{

    let {genes} = req.query;
    let gen = genes.split(",")
    let total = await gene2ensembl['gene2ensembl'].count({'entrez': {'$in': gen}}).exec()
    console.log(total)

    let results = await gene2ensembl['gene2ensembl'].find({'entrez': {'$in': gen}}).exec()
    
    res.json(results)
})

router.route('/ensembl2entrez/').get(async(req, res)=>{

    let {genes} = req.query;

    
    let gen = genes.split(",")
    console.log(gen)

    let total = await gene2ensembl['gene2ensembl'].count({'ensembl': {'$in': gen}}).exec()
    console.log(total)

    let results = await gene2ensembl['gene2ensembl'].find({'ensembl': {'$in': gen}}).exec()
    
    res.json(results)

})


router.route('/go/').get(async(req, res)=>{

    let {taxid} = req.query;

    let total = await gene2ensembl['gene2go'].count({'taxid': taxid}).exec()
    console.log(total)

    let results = await gene2ensembl['gene2go'].find({'taxid': taxid}).exec()
    
    res.json(results)
})




module.exports = router;