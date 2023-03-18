export interface Person {
	id: number;
	person_name: string;
	person_lastname: string;
	date_birth: number;
	email: string;
	role: PersonRoleType;
	phone: string;
	street_1: string;
	street_2: string;
	city: string;
	zip_code: string;
	region: string;
}

export interface PersonRoleTooltip {
	name: PersonRoleType;
	description: string;
}

export type PersonRoleType =
	| 'potential_adopter'
	| 'adopter'
	| 'senior_adopter'
	| 'foster'
	| 'short_term_foster'
	| 'long_term_foster'
	| 'medical_foster'
	| 'emergency_foster';
