import axios from "axios";

const KEY = "AIzaSyAWF3VeojhvNKnqS2YL1qqFSuZU_vMqdjA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: `${KEY}`,
  },
});
