import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'a7f4634ba3794ea6a87898c9abff8e5a'
    }
})