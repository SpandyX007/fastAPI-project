import axios from 'axios'   

const api=axios.create({
    // baseURL:"http://127.0.0.1:8000"
    baseURL:"https://fast-api-project-backend.vercel.app"
    // baseURL:"https://fastapi-project-q5g9.onrender.com"
});

export default api