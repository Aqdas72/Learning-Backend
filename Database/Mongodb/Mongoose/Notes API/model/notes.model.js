import {Schema, model} from 'mongoose';

const noteSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true, 
    },
    date: {
        type: Date,
        default: Date.now,
    },
});
export default model('Note', noteSchema);