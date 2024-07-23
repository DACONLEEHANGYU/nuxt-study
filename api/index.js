import axios from "axios";

// 공통설정 인스턴스화

const instance = axios.create({
    baseURL: "http://localhost:3000/",
})

function fetchProductById(id){
    return instance.get(`products/${id}`)
}

export { fetchProductById }

