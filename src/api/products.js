import instance from "./axios"

export const getProducts = async ({offset = 0, limit = 20, categoryId}) => {
    const params = {offset, limit};
    if (categoryId) params.category = categoryId
    
    try {
        const res = await instance.get(`/api/v1/products?limit=${limit}&offset=${offset}&categoryId=${categoryId}`);
        console.log(res)
        return res.data
    } catch (err) {
        console.error("데이터 불러오기 실패", err);
        throw err;
    }
}