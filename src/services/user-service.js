import { myAxios } from "./helper";


export const signUp=(user)=>{

    return myAxios.post('/api/auth/signup').then((response)=>response.json())
};


// https://www.youtube.com/watch?v=TZaWdbcMroo&ab_channel=LearnCodeWithDurgesh
// ye dekha hai till 16 mins and yet to complete half