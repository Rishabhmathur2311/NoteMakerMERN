import React, { useContext, useState } from "react";
import { Textarea, Box, Button, Input, Stack, FormLabel, FormControl, Divider, Heading, useToast } from '@chakra-ui/react';
import { editMessage } from "../services/api";
import { Link, useLocation } from "react-router-dom"


const EditBox=(msg)=>{

    const toast=useToast();

    const location = useLocation();
    const propsData = location.state;
    console.log(propsData);


    const [heading, setHeading]=useState(propsData.preHeading);
    const [content, setContent]=useState(propsData.preContent);

    const submitInput=async()=>{
        const detail={
            id: propsData.id,
            messageHeading: heading,
            messageContent: content,
        }
        toast({
          title: 'Message updated.',
          description: "Message have been updated",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
       
        await editMessage(detail);
        setHeading("");
        setContent("");
        

    }

    return (
        <Stack display="flex" alignItems="center" backgroundColor="#c9e4fb" height="max-content">
            <Box border='1px' borderColor='gray.200' p={5} shadow='md' margin="3% 3% 1% 3%" minWidth="360px" borderRadius="16px" backgroundColor="aliceblue">
            <Input  sx={{maxWidth: "500px"}} backgroundColor="aliceblue" size='md' variant='unstyled' value={heading}
             spacing="10px" margin="2%"
            onChange={(e)=>setHeading(e.target.value)}
            >
                
            </Input>
            <Divider />
<Textarea 

        backgroundColor="aliceblue"
        height="80px"
        variant="unstyled"
        // placeholder='Here is a sample placeholder'
        size='md'
        sx={{maxWidth: "500px"}}
        onChange={(e)=>setContent(e.target.value)}
        value={content}
        marginBottom="2%"
      >
      </Textarea>
      </Box>
      <Button variant="solid" colorScheme="green" onClick={(e)=>submitInput(e) }>Update</Button>
      <Link to="/">
        <Button>
        Go Back
        </Button>
        </Link>
      </Stack>
    );
}

export default EditBox;