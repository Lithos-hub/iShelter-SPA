export interface Application {
	status: ApplicationStatus;
	fullname: string;
	category: ApplicationCategory;
	email: string;
	phone?: string;
	message?: string;
}

export type ApplicationCategory =
	| 'adopter'
	| 'volunteer'
	| 'senior_adopter'
	| 'foster'
	| 'short_term_foster'
	| 'long_term_foster'
	| 'medical_foster'
	| 'emergency_foster';

export type ApplicationStatus = 'new' | 'read' | 'deleted' | 'denied' | 'important';
