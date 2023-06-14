import React, { useState, useEffect, useContext } from "react";
import { getMessages } from "../services/api";
import SingleMessage from "./SingleMessage";
import { Box, Button } from "@mui/material";
import { AccountContext } from "../context/userContext";

const Messages=()=>{

    const {message}=useContext(AccountContext);

    const [messages, setMessages]=useState([]);

    useEffect(()=>{
        const getMessageDetails=async()=>{
            const messageDetail=await getMessages();
            setMessages(messageDetail);
            console.log(messages);
        }
        getMessageDetails();
    }, [message]);

    // const getMessageDetails=()=>{
    //     const messageDetail=getMessages();
    //     setMessages(messageDetail);
    //     console.log(messages);
    // }

    const {person}=useContext(AccountContext);

    return (
        <Box sx={{ flexWrap: 'wrap' }} backgroundColor="#c9e4fb">
            {messages.map(message=>(
                message.chatId===person._id?
                <SingleMessage msg={message} backgroundColor="#c9e4fb"/>
                :null
            ))}
            
        </Box>
    );
}

export default Messages