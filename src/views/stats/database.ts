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
	labels: ['Adopciones', 'Casas de acogida', 'Nuevas entradas', 'Fallecimientos'],
	datasets: [
		{
			backgroundColor: ['#22c55e', '#f97316', '#3b82f6', '#64748b'],
			data: [490, 20, 80, 10],
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
	labels: ['Adopciones', 'Casas de acogida', 'Nuevas entradas', 'Fallecimientos'],
	datasets: [
		{
			backgroundColor: ['#22c55e', '#f97316', '#3b82f6', '#64748b'],
			data: [327, 17, 8, 4],
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

// const prompt = `

// Datos de adopciones (2022):

// Enero: 23
// Febrero: 93
// Marzo: 12
// Abril: 38
// Mayo: 12
// Junio: 93
// Julio: 64
// Agosto: 27
// Septiembre: 11
// Octubre: 23
// Noviembre: 18
// Diciembre: 23

// Datos de adopciones (2023):

// Enero: 112
// Febrero: 39
// Marzo: 50
// Abril: 70
// Mayo: 99
// Junio: 80
// Julio: 40

// Datos de organización (2022):

// Administradores: 1
// Paseadores de perros: 12
// Socializadores: 82
// Voluntarios en eventos de adopción: 32
// Recaudadores de fondos: 4

// Datos de organización (2023):

// Administradores: 2
// Paseadores de perros: 23
// Socializadores: 17
// Voluntarios en eventos de adopción: 7
// Recaudadores de fondos: 3

// Datos de solicitudes de adopción (2022):

// Enero: 98
// Febrero: 111
// Marzo: 82
// Abril: 321
// Mayo: 233
// Junio: 23
// Julio: 47
// Agosto: 28
// Septiembre: 39
// Octubre: 322
// Noviembre: 122
// Diciembre: 132

// Datos de solicitudes de adopción (2023):

// Enero: 123
// Febrero: 10
// Marzo: 93
// Abril: 131
// Mayo: 54
// Junio: 12
// Julio: 22

// Datos generales (2022):

// Adopciones: 327
// Casas de acogida: 17
// Nuevas entradas: 8
// Fallecimientos: 4

// Datos generales (2023):

// Adopciones: 490
// Casas de acogida: 20
// Nuevas entradas: 80
// Fallecimientos: 10

// `;
