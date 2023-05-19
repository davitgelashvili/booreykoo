import axios from "axios";
const API = process.env.REACT_APP_API_URL

async function getApi(link){
    try{
        const res = await axios({
            method: 'get',
            url: API + link
        })

        return res
    }catch(error){
        console.log(error)
    }
}

export {getApi}