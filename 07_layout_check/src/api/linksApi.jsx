import axios from "axios"

const linksApi = axios.create({
    baseURL: `${import.meta.env.VITE_APP_DOMAIN}/api`
})

export const getLinks = async (category) => {
    const response = await linksApi.get(`/links?filters[category][$eq]=${category}`)
    return response.data
}

export default linksApi