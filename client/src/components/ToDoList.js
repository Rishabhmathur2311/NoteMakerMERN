import { Box } from "@chakra-ui/react";
import InputBox from "./Input";
import Messages from "./Messages";

const ToDoList=()=>{
    return (
        <Box backgroundColor="#c9e4fb">
            <InputBox backgroundColor="#c9e4fb"/>
            <Messages backgroundColor="#c9e4fb"/>
        </Box>
    );
}

export default ToDoList;