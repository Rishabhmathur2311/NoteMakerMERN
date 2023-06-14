import mongoose from "mongoose";

const MessageSchema=new mongoose.Schema({
    messageHeading:{
        type: String
    },

    messageContent: {
        type: String
    },

    chatId: {
        type: String
    }
}, {
    timestamps: true
})

const Message=mongoose.model('Message', MessageSchema);

export default Message;