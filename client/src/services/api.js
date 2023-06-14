import axios from "axios";

const url="http://localhost:8000";

export const newMessage=async(data)=>{
    try {
        return await axios.post(`${url}/add`, data);
    } catch (error) {
        console.log(error);
    }
}

export const getMessages=async()=>{
    try{
        let response=await axios.get(`${url}/get`);
        return response.data;
    }catch(error){
        console.log(error);
    }
}

export const deleteMessage=async(data)=>{
    try {   
        return await axios.post(`${url}/delete`, data);
    } catch (error) {
        console.log(error);
    }
}

export const submitSignUp=async(data)=>{
    try {
        return await axios.post(`${url}/authentication/signup`, data);
    } catch (error) {
        console.log(error);
    }
}

export const submitLogin=async(data)=>{
    try {
        let response=await axios.post(`${url}/authentication/login`, data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const editMessage=async(data)=>{
    try {
        const id=data.id;
        return await axios.post(`${url}/edit/${id}`, data);
    } catch (error) {
        console.log(error);
    }
}