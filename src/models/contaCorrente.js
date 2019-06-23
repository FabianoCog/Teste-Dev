const mongoose = require ('../database');


const ContaSchema = new mongoose.Schema({
    saldo: {
        type: Number,
        required: true,
    },
    proprietario:{
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
    },

    createdAdt: {
        type: Date,
        default: Date.now,
    },
});


const Conta = mongoose.model('Conta', ContaSchema);

module.exports = Conta;