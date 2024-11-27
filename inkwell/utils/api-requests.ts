import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://inkwell-backend-j9si.onrender.com/api",
});

export function postPost(username: String, post: String) {
  return apiClient
    .post("/posts", { user: username, post: post })
    .then((response) => {
      return response;
    });
}

export function markLetterRead(id: String, is_opened: Boolean) {
  return apiClient.patch(`/letters/${id}`, { is_opened: is_opened });
}

export function getLetter(id: String) {
  return apiClient.get(`/letters/${id}`).then((response) => {
    return response;
  });
}

export function getAllLetters(username:String, sortOption:String){
    return apiClient.get("/letters", {params: {
        recipient: username,
        sort_by: sortOption
    }}).then((response) => {
        return response
    })
}
