import instance from "./axios"

export const getAllProducts = async () => {
    try {
        const res = await instance.get("/api/v1/products");
        console.log(res)
        return res.data
    } catch (err) {
        console.error("데이터 불러오기 실패", err);
        throw err;
    }
}