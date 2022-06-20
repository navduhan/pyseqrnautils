const mongoose = require('mongoose');

const ENSEMBLSchema = new mongoose.Schema({

    'taxid': {type:Number}, 
    'entrez': {type:Number},
    'ensembl': {type:String}
    
});

const GOSchema = new mongoose.Schema({

    'taxid': {type:Number}, 
    'entrez': {type:Number},
    'GO_ID': {type:String},
    'Evidence': {type:String},
    'GO_term': {type:String},
    'Category': {type:String},
    'Ontology': {type:String},
    
});


const gene2ensembls = mongoose.model('gene2ensembls', ENSEMBLSchema)

const gene2gos = mongoose.model('gene2gos', GOSchema)

module.exports = {
    'gene2ensembl' : gene2ensembls,
    'gene2go': gene2gos
}