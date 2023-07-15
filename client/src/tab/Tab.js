import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Container } from '@chakra-ui/react';
import {
  Alert,AlertIcon} from '@chakra-ui/react';
import Login from "../login/Login";
import SignUp from "../login/Signup";

const Auth=()=>{
    return (
        <Box>
        <Alert status='info' variant='solid' >
        <AlertIcon />
        Loading of Database might take 3-4 minutes
       </Alert>
        <Container maxW="xs" centerContent paddingTop="2%" backgroundColor="aliceblue "
        position="fixed"
        borderRadius="16px"
        left="50%"
        top="50%"
        transform="translate(-50%, -50%)"
        >
        <Tabs variant='enclosed' backgroundColor="aliceblue ">
  <TabList backgroundColor="aliceblue ">
    <Tab backgroundColor="aliceblue ">Sign Up</Tab>
    <Tab backgroundColor="aliceblue ">Log In</Tab>
  </TabList>
  <TabPanels backgroundColor="aliceblue">
    <TabPanel backgroundColor="aliceblue ">
      <SignUp />
    </TabPanel>
    <TabPanel backgroundColor="aliceblue ">
      <Login />
    </TabPanel>
  </TabPanels>
</Tabs>
</Container>
</Box>
    );
}

export default Auth;