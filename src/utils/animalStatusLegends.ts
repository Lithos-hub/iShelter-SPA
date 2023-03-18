import { AnimalStatusTooltip, StatusType } from '@/models';

export const statusLegends: AnimalStatusTooltip[] = [
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

export const getAnimalStatusName = (name: StatusType) => {
	return {
		adoptable: 'Disponible',
		pending: 'Pendiente',
		adopted: 'Adoptado',
		medical_treatment: 'En tratamiento',
		quarantine: 'En cuarentena',
		awaiting_spay: 'Castración/Esterilización',
		training: 'En entrenamiento',
		recovering: 'En recuperación',
		observation: 'En observación',
		geriatrics_care: 'Cuidados geriátricos',
		temp_no_adoptable: 'No adoptable',
		in_transit: 'En tránsito',
		study: 'En estudio',
		deceased: 'Fallecido',
	}[name];
};

export const getAnimalStatusColor = (name: StatusType) => {
	return {
		adoptable:
			'text-white bg-gradient-to-r from-emerald-500 to-[#3BB2B8] font-bold',
		pending:
			'text-white bg-gradient-to-br from-[#FCE38A] to-[#F38181] font-bold',
		adopted:
			'text-white bg-gradient-to-br from-[#17EAD9] to-[#6078EA] font-bold',
		medical_treatment:
			'text-white bg-gradient-to-b from-rose-500 to-[#FF7676] font-bold',
		quarantine:
			'text-white bg-gradient-to-br from-purple-300 to-indigo-900 font-bold',
		awaiting_spay:
			'text-white bg-gradient-to-br from-pink-200 to-rose-500 font-bold',
		training:
			'text-white bg-gradient-to-r from-[#5B247A] to-[#1BCEDF] font-bold',
		recovering:
			'text-white bg-gradient-to-br from-[#F02FC2] to-[#6094EA] font-bold',
		observation:
			'text-white bg-gradient-to-l from-[#F40076] to-orange-500 font-bold',
		geriatrics_care:
			'text-white bg-gradient-to-br from-indigo-500 to-rose-200 font-bold',
		temp_no_adoptable:
			'text-white bg-gradient-to-br from-gray-500 to-slate-900 font-bold',
		in_transit:
			'text-white bg-gradient-to-br from-sky-500 to-blue-900 font-bold',
		study: 'text-white bg-gradient-to-r from-[#FA7CBB] to-orange-500 font-bold',
		deceased: 'text-white bg-gradient-to-br from-black to-slate-900 font-bold',
	}[name];
};
