import logo from './logo.svg';
import './App.css';
import {Box} from "@mui/material";
import InputBox from './components/Input';
import Messages from './components/Messages';
import { ChakraProvider } from '@chakra-ui/react';
import SignUp from './login/Signup';
import { useContext } from 'react';
import { AccountContext } from './context/userContext';
import Login from './login/Login';
import ToDoList from './components/ToDoList';

import { BrowserRouter as Router,  Routes, Route } from "react-router-dom";
import DisplayList from './components/DisplayList';
import EditBox from './components/EditBox';


function App() {

  const {person}=useContext(AccountContext);

  return (
    <ChakraProvider>
      <Router>
        <Routes>
        <Route path="/" element={<DisplayList />} />
        <Route path="/edit/:id" element={<EditBox />} />
        </Routes>
        </Router>
    </ChakraProvider>
  );
}

export default App;