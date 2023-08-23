import axios from "axios";


const API_url = "http://127.0.0.1:3002/users";

export  const addUser = async(data) => {
    try {
    return await axios.post(API_url, data);
    } catch (error) {
        console.log('Error while calling Adduser api',error.message);
    }

};

export  const getAllUsers = async() => {
    try {
    return await axios.get(API_url);
    } catch (error) {
        console.log('Error while calling GetAllUsers api',error.message);
    }

};