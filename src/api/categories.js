import instance from "./axios"

export const getAllCategories = async () => {
    try {
        const res = await instance.get("/api/v1/categories");
        console.log(res)
        return res.data
    } catch (err) {
        console.error("데이터 불러오기 실패", err);
        throw err;
    }
}