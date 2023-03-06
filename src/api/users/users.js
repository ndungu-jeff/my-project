import { backendAxios } from "../axios";

export const registerUser = async (
    username,
    password,
    email,
) => {
    return await backendAxios.post('/users', {
        username,
        password,
        email,       
    });
};

export const logInUser = async (
    password,
    email,
) => {
    return await backendAxios.post('/users/aunthenticate', {
        password,
        email,       
    });
};