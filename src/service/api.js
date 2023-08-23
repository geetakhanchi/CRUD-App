import axios from "axios";


const API_url = " "

export  const addUser = async(data) => {
    try {
    return await axios.post(API_url, data);
    } catch (error) {
        console.log('Error while calling Adduser api',error.message);
    }

};