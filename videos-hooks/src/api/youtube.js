import axios from "axios";

const KEY = "AIzaSyBffBJO-rP788QZsrELDuOGQG-MsXc9pJ4";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		type: "video",
		maxResults: "10",
		key: KEY,
	},
});
