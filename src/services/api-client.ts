import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: "291ce98060b1436289cfab2298e2c27c"
    }
})