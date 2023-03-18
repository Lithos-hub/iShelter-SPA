export interface Animal {
	id: number;
	gender: string;
	name: string;
	status: StatusType;
	specie: string;
	breed: string;
	location: string;
	microchip: string;
	weight: number;
	weight_type: string;
	date_birth: number;
	intake_condition: string;
	intake_date: number;
	microchip_number?: string;
	image?: string;
}

export interface AnimalStatusTooltip {
	name: StatusType;
	description: string;
}

export type StatusType =
	| 'adoptable'
	| 'pending'
	| 'adopted'
	| 'medical_treatment'
	| 'quarantine'
	| 'awaiting_spay'
	| 'training'
	| 'recovering'
	| 'observation'
	| 'geriatrics_care'
	| 'temp_no_adoptable'
	| 'in_transit'
	| 'study'
	| 'deceased';
