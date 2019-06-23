const mongoose = require ('../database');
const bcrypt = require ('bcryptjs');

const UserSchema = new mongoose.Schema({
    valor: {
        type: String,
        require: true,
    },
    parcelas: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    conta_origem: {

    },
    conta_destino:{

    },
    password: {
        type: String,
        required: true,
        select: true,
    },

    createdAdt: {
        type: Date,
        default: Date.now,
    },
});


UserSchema.pre('save', async function (next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;