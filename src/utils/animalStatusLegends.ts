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
		description: 'El animal ha cruzado el arcoiris.',
	},
];

export const getAnimalStatusName = (name: StatusType) => {
	return {
		adoptable: 'En adopción',
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
		deceased: '',
	}[name];
};

export const getAnimalStatusColor = (name: StatusType) => {
	return {
		adoptable: 'text-white bg-[#43aa8b] font-bold',
		pending: 'text-white bg-[#f7b538] font-bold',
		adopted: 'text-white bg-[#07beb8] font-bold',
		medical_treatment: 'text-white bg-[#ff85a1] font-bold',
		quarantine: 'text-white bg-[#9d4edd] font-bold',
		awaiting_spay: 'text-white bg-[#8e9aaf] font-bold',
		training: 'text-white bg-[#89023e] font-bold',
		recovering: 'text-white bg-[#89c2d9] font-bold',
		observation: 'text-white bg-[#d69f7e] font-bold',
		geriatrics_care: 'text-white bg-[#ff477e] font-bold',
		temp_no_adoptable: 'text-white bg-[#f94144] font-bold',
		in_transit: 'text-white bg-[#014f86] font-bold',
		study: 'text-white bg-[#774936] font-bold',
		deceased: 'text-black rainbow font-bold',
	}[name];
};
