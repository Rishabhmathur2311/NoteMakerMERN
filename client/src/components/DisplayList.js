import { useContext } from "react";
import Login from "../login/Login";
import ToDoList from "./ToDoList";
import { AccountContext } from "../context/userContext";
import Auth from "../tab/Tab";
import { Box } from "@chakra-ui/react";

const DisplayList=()=>{

    const {person}=useContext(AccountContext);

return (
    <Box minWidth="200px"
    backgroundColor="aliceblue"
    >
        {Object.keys(person).length!==0 ? <ToDoList backgroundColor="aliceblue" /> : <Auth />}
    </Box>
);
}

export default DisplayList;