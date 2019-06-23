const mongoose = require ('../database');
const bcrypt = require ('bcryptjs');

const PagamentoSchema = new mongoose.Schema({
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


const Pagamento = mongoose.model('Pagamento', PagamentoSchema);

module.exports = Pagamento;