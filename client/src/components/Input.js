import React, { useContext, useState } from "react";
import { newMessage } from "../services/api";
import { Textarea, Box, Button, Input, Stack, FormLabel, FormControl, Divider, Heading } from '@chakra-ui/react'
import { AccountContext } from "../context/userContext";


const InputBox=()=>{

    const {person, getMessage, message}=useContext(AccountContext);

    const [italic, setItalic] = React.useState(false);
  const [fontWeight, setFontWeight] = React.useState('normal');
  const [anchorEl, setAnchorEl] = React.useState(null);

    const [heading, setHeading]=useState("");

    const [content, setContent]=useState("");
      

    const submitInput=async (e)=>{
        const detail={
            messageHeading: heading,
            messageContent: content,
            chatId: person._id,
        }

        await newMessage(detail);
        setHeading("");
        setContent("");
        getMessage(!message);
    }

    return (
        <Stack display="flex" alignItems="center" backgroundColor="#c9e4fb" height="max-content">
            <Heading as='h1' size='4xl' noOfLines={2} backgroundColor="#c9e4fb" 
            fontFamily= 'Tsukimi Rounded'
            paddingTop="2%"
            color="#557ca9"
            >Welcome {person.name}</Heading>
            <Box border='1px' borderColor='gray.200' p={5} shadow='md' margin="3% 3% 1% 3%" minWidth="360px" borderRadius="16px" backgroundColor="aliceblue">
            <Input placeholder='Enter the heading' sx={{maxWidth: "500px"}} backgroundColor="aliceblue" size='md' variant='unstyled' value={heading}
             spacing="10px" margin="2%"
            onChange={(e)=>setHeading(e.target.value)}
            />
            <Divider />
<Textarea 
        backgroundColor="aliceblue"
        height="80px"
        variant="unstyled"
        placeholder='Here is a sample placeholder'
        size='md'
        sx={{maxWidth: "500px"}}
        onChange={(e)=>setContent(e.target.value)}
        value={content}
        marginBottom="2%"
      />
      </Box>
      <Button variant="solid" colorScheme="green"  onClick={(e)=>submitInput(e)}>Send</Button>
        </Stack>
    
    );
}

export default InputBox;