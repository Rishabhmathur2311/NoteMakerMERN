import express  from "express";
import Message from "../model/Message.js";

export const addData=(req, res)=>{
    try{
    const newMessage=new Message(req.body);
    newMessage.save();
    return res.status(200).json(newData);
    }catch(error){
        return res.status(500).json(error);
    }
}

export const getMessages=async(req, res)=>{
    try {
        const message=await Message.find({}).sort({ _id: -1 });
        return res.status(200).json(message);
    } catch (error) {
        return res.status(500).json(error);
    }
}

export const deleteMessage=async(req, res)=>{
    try {
        await Message.deleteOne({createdAt: req.body.createdAt});
        return res.status(200).json("message deleted");
    } catch (error) {
        return res.status(500).json(error);
    }
}

export const editMessage=async(req, res)=>{
    try {
       return await Message.findByIdAndUpdate(req.body.id, { $set: { messageHeading: req.body.messageHeading, messageContent: req.body.messageContent } })
    } catch (error) {
        return res.status(500).json(error);
    }
}