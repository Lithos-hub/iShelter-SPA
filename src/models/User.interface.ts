export interface User {
	id: number;
	user_name: string;
	user_lastname: string;
	email: string;
	phone_first: string;
	role: UserRoleType;
	phone_second?: string;
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
