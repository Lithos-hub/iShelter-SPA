import { PersonRoleTooltip, PersonRoleType } from '@/models';

export const personRoleLegends: PersonRoleTooltip[] = [
	{
		name: 'potential_adopter',
		description:
			'Persona que ha expresado su interés en adoptar un animal pero que aún no ha completado el proceso de adopción.',
	},
	{
		name: 'adopter',
		description:
			'Persona que ha adoptado un animal del refugio y ha completado el proceso de adopción.',
	},
	{
		name: 'senior_adopter',
		description:
			'Un adoptante que tiene más de cierta edad, generalmente 65 años o más, y puede ser elegible para programas especiales de adopción o descuentos.',
	},
	{
		name: 'foster',
		description:
			'Persona que acoge temporalmente a un animal en su casa como acogedor, con la intención de adoptarlo si el periodo de acogida va bien.',
	},
	{
		name: 'short_term_foster',
		description:
			'Persona que acoge a un animal en su casa durante un breve periodo de tiempo, normalmente de unos días a unas semanas.',
	},
	{
		name: 'long_term_foster',
		description:
			'Persona que acoge a un animal en su casa durante un periodo de tiempo más largo, normalmente varios meses o hasta que el animal es adoptado.',
	},
	{
		name: 'medical_foster',
		description:
			'Persona que acoge a un animal con necesidades médicas especiales que requieren cuidados y atención adicionales.',
	},
	{
		name: 'emergency_foster',
		description:
			'Persona que acoge a un animal con poca antelación debido a una emergencia repentina, como una catástrofe natural o una crisis familiar.',
	},
];

export const getPersonRoleName = (name: PersonRoleType) => {
	return {
		potential_adopter: 'Adoptante potencial',
		adopter: 'Adoptante',
		senior_adopter: 'Adoptante Senior',
		foster: 'Casa de acogida',
		short_term_foster: 'Acog. a corto plazo',
		long_term_foster: 'Acog. de larga duración',
		medical_foster: 'Acog. médica',
		emergency_foster: 'Acog. de emergencia',
	}[name];
};

export const getPersonRoleColor = (name: PersonRoleType) => {
	return {
		potential_adopter: 'bg-[#577590] text-white font-bold',
		adopter: 'bg-[#43aa8b] text-white font-bold',
		senior_adopter: 'bg-[#6a4c93] text-white font-bold',
		foster: 'bg-[#8f2d56] text-white font-bold',
		short_term_foster: 'bg-[#0fa3b1] text-white font-bold',
		long_term_foster: 'bg-[#463f3a] text-white font-bold',
		medical_foster: 'bg-[#f94144] text-white font-bold',
		emergency_foster: 'bg-[#fe7f2d] text-white font-bold',
	}[name];
};
