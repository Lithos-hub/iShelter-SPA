export interface User {
	id: number;
	user_name: string;
	user_lastname: string;
	email: string;
	phone_first: string;
	phone_second?: string;
	role: UserRoleType;
	avatar: string;
}

export interface UserRoleTooltip {
	name: UserRoleType;
	description: string;
}

export type UserRoleType =
	| 'admin'
	| 'staff_dog_walker'
	| 'staff_socializer'
	| 'staff_adoption_event_volunteer'
	| 'staff_fundraiser';
