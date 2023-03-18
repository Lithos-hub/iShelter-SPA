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
		potential_adopter:
			'bg-gradient-to-r from-blue-900 to-blue-500 text-white font-bold',
		adopter:
			'bg-gradient-to-r from-green-600 to-emerald-500 text-white font-bold',
		senior_adopter:
			'bg-gradient-to-r from-purple-900 to-indigo-400 text-white font-bold',
		foster: 'bg-gradient-to-r from-sky-700 to-blue-500 text-white font-bold',
		short_term_foster:
			'bg-gradient-to-r from-cyan-500 to-pink-600 text-white font-bold',
		long_term_foster:
			'bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold',
		medical_foster:
			'bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold',
		emergency_foster:
			'bg-gradient-to-b from-orange-500 to-amber-500 text-white font-bold',
	}[name];
};
