import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID KKmdZAPi26tVrEOybEDdIpwxaSi0CXFeaKbkk3rx0wM",
  },
});
