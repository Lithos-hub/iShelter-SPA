const yearLabels = [
	'Enero',
	'Febrero',
	'Marzo',
	'Abril',
	'Mayo',
	'Junio',
	'Julio',
	'Agosto',
	'Septiembre',
	'Octubre',
	'Noviembre',
	'Diciembre',
];

// CURRENT

export const CURRENT_ADOPTIONS_DATA = {
	labels: yearLabels,
	datasets: [
		{
			label: 'Adopciones',
			backgroundColor: '#22c55e',
			borderColor: '#22c55e',
			data: [112, 39, 50, 70, 99, 80, 40],
		},
	],
};

export const CURRENT_GENERAL_DATA = {
	labels: [
		'Adopciones',
		'Casas de acogida',
		'Nuevas entradas',
		'Fallecimientos',
	],
	datasets: [
		{
			backgroundColor: ['#22c55e', '#f97316', '#3b82f6', '#64748b'],
			data: [10, 20, 80, 10],
		},
	],
};

export const CURRENT_APPLICATIONS_DATA = {
	labels: yearLabels,
	datasets: [
		{
			label: 'Solicitudes de adopción',
			backgroundColor: '#577590',
			borderColor: '#577590',
			data: [123, 10, 93, 131, 54, 12, 22],
		},
	],
};

export const CURRENT_ORGANIZATION_DATA = {
	labels: [
		'Administradores',
		'Paseadores de perros',
		'Socializadores',
		'Voluntarios en eventos de adopción',
		'Recaudadores de fondos',
	],
	datasets: [
		{
			backgroundColor: ['#264653', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51'],
			data: [2, 23, 17, 7, 3],
		},
	],
};

// LAST

export const LAST_ADOPTIONS_DATA = {
	labels: yearLabels,
	datasets: [
		{
			label: 'Adopciones',
			backgroundColor: '#22c55e',
			borderColor: '#22c55e',
			data: [23, 93, 12, 38, 12, 93, 64, 27, 11, 23, 18, 23],
		},
	],
};

export const LAST_GENERAL_DATA = {
	labels: [
		'Adopciones',
		'Casas de acogida',
		'Nuevas entradas',
		'Fallecimientos',
	],
	datasets: [
		{
			backgroundColor: ['#22c55e', '#f97316', '#3b82f6', '#64748b'],
			data: [7, 17, 8, 4],
		},
	],
};

export const LAST_APPLICATIONS_DATA = {
	labels: yearLabels,
	datasets: [
		{
			label: 'Solicitudes de adopción',
			backgroundColor: '#577590',
			borderColor: '#577590',
			data: [98, 111, 82, 321, 233, 23, 47, 28, 39, 322, 122, 132],
		},
	],
};

export const LAST_ORGANIZATION_DATA = {
	labels: [
		'Administradores',
		'Paseadores de perros',
		'Socializadores',
		'Voluntarios en eventos de adopción',
		'Recaudadores de fondos',
	],
	datasets: [
		{
			backgroundColor: ['#264653', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51'],
			data: [1, 12, 82, 32, 4],
		},
	],
};
