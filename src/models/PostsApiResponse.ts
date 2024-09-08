import type { BaseResponse } from "./";

export interface PostsResponse {
	userId: number;
	id: number;
	title: string;
	body: string;
}

export interface PostsApiResponse extends BaseResponse {
	content: PostsResponse[];
}
