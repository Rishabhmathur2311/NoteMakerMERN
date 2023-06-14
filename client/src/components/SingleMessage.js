import React, { useContext } from "react";
import { Box, Card, CardHeader, CardBody, HStack, StackDivider, Text, CardFooter, Button } from '@chakra-ui/react';
import { Divider } from '@chakra-ui/react'
import { Heading } from "@chakra-ui/react";
import { FormatDate } from "../common-utils";
import { deleteMessage } from "../services/api";
import { AccountContext } from "../context/userContext";
import EditBox from "./EditBox";
import { Link, NavLink } from "react-router-dom";


function Feature({ title, desc, msg, ...rest }) {

  const {getMessage, message}=useContext(AccountContext);

  const deleteMessageDetail=async()=>{
    await deleteMessage(msg);
    getMessage(!message);
  }

  const prop={
    id: msg._id,
    preHeading: msg.messageHeading,
    preContent: msg.messageContent,
  }


  return (
    <Box p={5} shadow='md' borderWidth='1px' minWidth="200px" margin="2%" borderRadius="16px" {...rest}>
      <Heading fontSize='xl' backgroundColor="aliceblue">{title}</Heading>
      <Divider margin="3%"/>
      <Text mt={4} backgroundColor="aliceblue">{desc}</Text>
      <Text fontSize= "12px" color="#919191" marginTop= "4px" marginBottom="0" backgroundColor="aliceblue" >
      <FormatDate date={msg.createdAt} />
      </Text>
      <Divider margin="3%"/>
      
     <Button  variant='solid' colorScheme="red"  onClick={()=>deleteMessageDetail(msg)} >Delete</Button>
     <Link component={Link} to={`/edit/${msg._id}`} state={prop}>
      <Button variant="solid" colorScheme="green" marginLeft="10px">
      Edit
      </Button>
      </Link>
    </Box>
  )
}

function SingleMessage({msg}) {
  return (
    <HStack spacing={8} direction='row' margin="1%" backgroundColor="#c9e4fb">
      <Feature
      backgroundColor="aliceblue"
        title={msg.messageHeading}
        desc={msg.messageContent}
        msg={msg}
      />      
    </HStack>
  )
}



export default SingleMessage;