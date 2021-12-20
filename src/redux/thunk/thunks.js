import { serverPath } from '../../constants/noteList';
import { GET_USER_INFO } from '../actions/actionTypes';
import axios from "axios";
// import {useQuery} from "react-query";


export const signInUser = (email, password) => {
    return async function (dispatch) {
            const response=await axios.get(serverPath)
            const data= await  response.data
        const currentUser = data.find(
    (element) => element.email == email && element.password == password
);
dispatch({ type: GET_USER_INFO, payload: currentUser });
    };
};

//
// const {data}=useQuery('getAccess',async ()=>{
//     const response=await axios.get(serverPath)
//     return response
// })