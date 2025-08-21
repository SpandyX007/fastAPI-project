import axios from 'axios'   

const api=axios.create({
    // baseURL:"http://127.0.0.1:8000"
    baseURL:"https://fast-api-project-backend-carhcuxu4-spandys-projects.vercel.app"
});

export default api