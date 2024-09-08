import { http, type HttpHandler, HttpResponse, type JsonBodyType } from "msw";
// import seedEnvData from "./seedData/seedEnvData";
import seedGetPosts from "./seedData/seedGetPosts";

const mockRequestGet = (url: string, response: JsonBodyType) => {
	return http.get(url, () => HttpResponse.json(response));
};

const mockRequestPost = (url: string, response: JsonBodyType) => {
	return http.post(url, () => HttpResponse.json(response));
};

const handlers: HttpHandler[] = [
	// mockRequestGet(seedEnvData.url, seedEnvData.response),
	mockRequestGet(seedGetPosts.url, seedGetPosts.response),
	mockRequestPost(seedGetPosts.url, seedGetPosts.response),
];

export default handlers;
