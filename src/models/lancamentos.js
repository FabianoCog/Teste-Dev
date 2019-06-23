const mongoose = require ('../database');
const bcrypt = require ('bcryptjs');

const LancamentosSchema = new mongoose.Schema({
    valor: {
        type: Number,
        required: true,
    },
    
    parcelas: {
        type: Number,
        required: true,
        max: 3,
    },

    conta_origem: {
        type: Number,
        required: true,
    },

    conta_destino:{
        type: Number,
        required: true,
    },

    createdAdt: {
        type: Date,
        default: Date.now,
    },
});


const Lancamentos = mongoose.model('Lancamentos', LancamentosSchema);

module.exports = Lancamentos;