import instance from "./axios"

export const getProducts = async ({offset = 0, limit = 20, categoryId}) => {
    const params = {
        offset,
        limit,
    }
    if (categoryId) params.categoryId = categoryId
    
    try {
        const res = await instance.get(`/api/v1/products`, { params })
        console.log(res.data)
        return res.data
    } catch (err) {
        console.error("데이터 불러오기 실패", err);
        throw err;
    }
}