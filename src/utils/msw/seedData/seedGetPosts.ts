import type { PostsApiResponse } from "../../pages/reports/models";
import type { SeedRestData } from "./SeedRestData";

export default {
	url: "https://jsonplaceholder.typicode.com/posts",
	response: {
		content: [],
		errorCode: "",
		sessionID: "",
		errorDescription: "",
		responseStatus: "OK",
	},
} as SeedRestData<PostsApiResponse>;
