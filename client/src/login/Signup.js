import React, { useState } from "react";
import {Box, FormControl, FormLabel, Input, Button, VStack, Alert, AlertIcon} from "@chakra-ui/react";
import { useToast } from '@chakra-ui/react'
import { submitSignUp } from "../services/api";


const SignUp=()=>{

    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [name, setName]=useState("");
    const toast = useToast();

    const postLogin=async()=>{
        
        const detail={
            email,
            password,
            name,
        }
        await submitSignUp(detail);

        setEmail("");
        setName("");
        setPassword("");
        
        toast({
            title: 'Account created.',
            description: "We've successfully created your account.",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
    }

    return (
        <VStack spacing="10px" backgroundColor="aliceblue ">
        {alert("Loading of database might take 3-4 minutes")}
        <FormControl  width="120%" backgroundColor="aliceblue ">
        <FormLabel backgroundColor="aliceblue ">Name</FormLabel>
        <Input backgroundColor="white"
        placeholder='Enter your Name' 
        onChange={(e)=>setName(e.target.value)}
        value={name}
        />
        </FormControl>

        <FormControl  width="120%" backgroundColor="aliceblue ">
        <FormLabel backgroundColor="aliceblue ">E-Mail</FormLabel>
        <Input backgroundColor="white"
        placeholder='Enter your E-Mail' 
        onChange={(e)=>setEmail(e.target.value)}
        value={email}
        />
        </FormControl>

        <FormControl  width="120%" backgroundColor="aliceblue ">
        <FormLabel backgroundColor="aliceblue ">Password</FormLabel>
        <Input backgroundColor="white"
        placeholder='Enter your Password' 
        type="password"
        onChange={(e)=>setPassword(e.target.value)}
        value={password}
        />
        </FormControl>


        <Button onClick={postLogin} backgroundColor="#c9e4fb" variant='ghost'>Sign Up</Button>
        </VStack>
    );
}

export default SignUp;
