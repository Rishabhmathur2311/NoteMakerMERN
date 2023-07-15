import React, { useContext, useState, useEffect } from "react";
import {Box, FormControl, FormLabel, Input, Button, VStack} from "@chakra-ui/react";
import { AccountContext } from "../context/userContext";
import { submitLogin } from "../services/api";
import { NavLink } from "react-router-dom";
import ToDoList from "../components/ToDoList";
import Rough from "./rough";

const Login=()=>{

    const{setPerson, person}=useContext(AccountContext);

    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");

    const postLogin=async ()=>{
        let detail={
            email,
            password,
        }
        let response=await submitLogin(detail);
        setPerson(response);
    }

    return (
        <VStack spacing="10px" backgroundColor="aliceblue ">
        {alert("Loading of database might take 3-4 minutes")}
        <FormControl width="120%" backgroundColor="aliceblue">
        <FormLabel backgroundColor="aliceblue">E-Mail</FormLabel>
        <Input placeholder='Enter your E-Mail' 
        backgroundColor="white"
        onChange={(e)=>setEmail(e.target.value)}
        />
        </FormControl>

        <FormControl width="120%" backgroundColor="aliceblue">
        <FormLabel backgroundColor="aliceblue">Password</FormLabel>
        <Input placeholder='Enter your Password' 
        backgroundColor="white"
        onChange={(e)=>setPassword(e.target.value)}
        />
        </FormControl>

        <Button onClick={postLogin} variant="ghost" backgroundColor="#c9e4fb">Log In</Button>
        <Rough person={person}/>
        {/* {Object.keys(person).length!==0 ? "hello" :  <ToDoList />} */}
        </VStack>
    );
}

export default Login;
