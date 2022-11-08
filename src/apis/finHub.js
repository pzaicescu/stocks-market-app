import axios from "axios";

const TOKEN = "cdl218aad3i4r9fur9ugcdl218aad3i4r9fur9v0"

export default axios.create({
    baseURL: "https://finnhub.io/api/v1",
    params: {
        token: TOKEN
    }
})
