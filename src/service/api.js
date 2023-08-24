import axios from "axios";


const API_url = "http://127.0.0.1:3002/users";

export  const addUser = async(data) => {
    try {
    return await axios.post(API_url, data);
    } catch (error) {
        console.log('Error while calling adduser api',error.message);
    }

};

export  const getAllUsers = async() => {
    try {
    return await axios.get(API_url);
    } catch (error) {
        console.log('Error while calling getallusers api',error.message);
    }

};

export  const getUser = async(data) => {
    try {
    return await axios.get(`${API_url}/${data}`);
    } catch (error) {
        console.log('Error while calling getalluser api',error.message);
    }

};

export  const editUser = async(data) => {
    try {
    return await axios.put(`${API_url}/${data.id}`, data);
    } catch (error) {
        console.log('Error while calling edituser api',error.message);
    }

};

export  const deleteUser = async(id) => {
    try {
    return await axios.delete(`${API_url}/${id}`);
    } catch (error) {
        console.log('Error while calling deleteuser api',error.message);
    }

};