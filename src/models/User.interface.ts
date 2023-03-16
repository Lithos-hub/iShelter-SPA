export interface User {
	id: number;
	user_name: string;
	user_lastname: string;
	email: string;
	phone_first: string;
	role: string;
	phone_second?: string;
	avatar: string;
}
