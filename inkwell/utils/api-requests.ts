import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://inkwell-backend-j9si.onrender.com/api"
})

export function postPost(username:String, post:String){
    return apiClient.post("/posts", 
        {"user": username, "post": post}
    ).then((response) => {
        return response
    })
}