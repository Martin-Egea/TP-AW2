import mongoose from "mongoose";

const { Schema, models, model } = mongoose;

const ProductSchema = new Schema({
    nombre: {type: String, required: true},
    desc: {type: String, required: true},
    precio: {type: Number, required: true},
    imagen: {type: String, requided: true},
})

const Product = models.product || model('product', ProductSchema)

export default Product