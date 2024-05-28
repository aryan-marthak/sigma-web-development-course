import mongoose from "mongoose";
import { boolean } from "webidl-conversions";
const todoSchema = new mongoose.Schema({
    name: String,
    desc: String,
    isDone: Boolean,
    days: Number
});

export const Todo = mongoose.model('Todo', todoSchema);