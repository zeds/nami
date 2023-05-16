import axios from "axios"

const blogsApi = axios.create({
    baseURL: `${import.meta.env.VITE_APP_DOMAIN}/api`
})

export const BlogDetail = async (id) => {
    const response = await blogsApi.get(`/blogs/${id}?populate=hero`)
    return response.data
}


export default blogsApi