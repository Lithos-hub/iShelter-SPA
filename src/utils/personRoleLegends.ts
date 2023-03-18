import { Legend, PersonRoleType } from '@/models';

export const personRoleLegends: Legend[] = [
	{
		name: 'adoptable',
		description:
			'El animal está listo para encontrar un hogar permanente y está disponible para ser adoptado por una familia.',
	},
	{
		name: 'pending',
		description:
			'El animal ya ha sido seleccionado para ser adoptado por una familia, pero aún no ha sido entregado a su nuevo hogar.',
	},
	{
		name: 'adopted',
		description:
			'El animal ha encontrado un hogar permanente y ha sido adoptado por una familia.',
	},
	{
		name: 'medical_treatment',
		description:
			'El animal está siendo tratado por una enfermedad o lesión y está en proceso de recuperación.',
	},
	{
		name: 'quarantine',
		description:
			'El animal está en cuarentena para evitar la propagación de enfermedades contagiosas.',
	},
	{
		name: 'awaiting_spay',
		description:
			'El animal está esperando ser castrado o esterilizado antes de ser adoptado.',
	},
	{
		name: 'training',
		description:
			'El animal está recibiendo entrenamiento o adiestramiento para mejorar su comportamiento o habilidades.',
	},
	{
		name: 'recovering',
		description:
			'El animal está en proceso de recuperación después de una cirugía.',
	},
	{
		name: 'observation',
		description:
			'El animal está siendo observado por su salud o comportamiento, para asegurarse de que esté sano y listo para ser adoptado.',
	},
	{
		name: 'geriatrics_care',
		description:
			'El animal es anciano y necesita cuidados especiales y atención adicional.',
	},
	{
		name: 'temp_no_adoptable',
		description:
			'El animal no está disponible para adopción en este momento, por alguna razón específica.',
	},
	{
		name: 'in_transit',
		description:
			'El animal está siendo trasladado a otra protectora de animales o hogar.',
	},
	{
		name: 'study',
		description:
			'El animal está siendo estudiado o investigado por su salud o comportamiento.',
	},
	{
		name: 'deceased',
		description:
			'El animal ha fallecido en la protectora de animales, lo cual es siempre una pérdida triste para el personal y voluntarios de la protectora.',
	},
];

export const getPersonRoleName = (name: PersonRoleType) => {
	return {
		potential_adopter: 'Adoptante potencial',
		adopter: 'Adoptante',
		senior_adopter: 'Adoptante Senior',
		foster: 'Casa de acogida',
		short_term_foster: 'Acogida a corto plazo',
		long_term_foster: 'Acogida de larga duración',
		medical_foster: 'Acogida médica',
		emergency_foster: 'Acogida de emergencia',
		dog_walker: 'Paseador de perros',
		socializer: 'Socializador',
		adoption_event_volunteer: 'Voluntario en eventos de adopción',
		fundraiser: 'Recaudador de fondos',
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
		dog_walker:
			'bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold',
		socializer:
			'bg-gradient-to-r from-amber-500 to-pink-500 text-white font-bold',
		adoption_event_volunteer:
			'bg-gradient-to-r from-pink-500 to-cyan-500 text-white font-bold',
		fundraiser:
			'bg-gradient-to-r from-slate-800 to-indigo-500 text-white font-bold',
	}[name];
};
