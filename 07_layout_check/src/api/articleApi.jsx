import axios from "axios"

// blog
// privacy
// ec-law

const articleApi = axios.create({
    baseURL: `${import.meta.env.VITE_APP_DOMAIN}/api`
})

// プライバシーポリシー
export const ArticlePrivacy = async () => {
    console.log("プライバシー")
    const response = await articleApi.get(`/articles?filters[category][$eq]=privacy`)
    return response.data
}

//特商法
export const ArticleEcLaw = async () => {
    const response = await articleApi.get(`/articles?filters[category][$eq]=ec-law`)
    return response.data
}


export const ArticleDetail = async (id) => {
    console.log("MarkDownDetail id=", id)
    const response = await articleApi.get(`/articles/${id}?populate=hero`)
    console.log(response.data)
    return response.data
}

export const ArticleCategory = async (category) => {
    console.log("category=", category)
    const response = await articleApi.get(`/articles?filters[category][$eq]=${category}&populate=hero`)
    console.log(response.data)
    return response.data
}

export const ArticleLists = async () => {
    // category=blog or news
    const response = await articleApi.get(`articles?fields[0]=title&fields[1]=category&fields[2]=updatedAt&filters[category][$eq]=blog&filters[category][$eq]=news&populate=hero`)
    return response.data.data
}

export default articleApi