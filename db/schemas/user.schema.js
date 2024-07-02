import mongoose from "mongoose";

const { Schema, models, model } = mongoose;

const UserSchema = new Schema({
    nombre: {type: String, required: true, trim: true},
    apellido: {type: String, required: true, trim: true},
    email: {type: String, required: true, unique: true, lowercase: true, trim: true},
    password: {type: String, required: true},
    roll: {type: Number, default: 0},
})

const User = models.user || model('user', UserSchema)

export default User