import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const MODULES_API = `${REMOTE_SERVER}/api/modules`;

export const createModule = async ( module: any) => {
    const response = await axios.post( `${MODULES_API}`, module );
    return response.data;
};

export const findModulesInCourse = async (number: string) => {
    const response = await axios
        .get(`${MODULES_API}/${number}`);
    return response.data;
};

export const deleteModule = async (moduleId: string) => {
    const response = await axios
        .delete(`${MODULES_API}/${moduleId}`);
    return response.data;
};

export const updateModule = async (module: any) => {
    const response = await axios.put(`${MODULES_API}/${module._id}`, module);
    return response.data;
};


