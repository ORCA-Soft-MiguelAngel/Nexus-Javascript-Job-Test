import axios from "axios";

const axiosClient = axios.create({

  withCredentials: true,
});

axiosClient.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

export default axiosClient;
