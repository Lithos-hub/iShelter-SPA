import { UserRoleTooltip, UserRoleType } from '@/models';

export const personRoleUserRoleTooltips: UserRoleTooltip[] = [
	{
		name: 'admin',
		description:
			'Persona encargada de gestionar la organización mediante iShelter.',
	},
	{
		name: 'staff_dog_walker',
		description:
			'Voluntario que pasea perros y les proporciona ejercicio y socialización.',
	},
	{
		name: 'staff_socializer',
		description:
			'Voluntario que pasa tiempo con animales, jugando con ellos y proporcionándoles socialización y enriquecimiento.',
	},
	{
		name: 'staff_adoption_event_volunteer',
		description:
			'Voluntario que ayuda en los eventos de adopción, por ejemplo, colocando mesas y sillas, ayudando a los posibles adoptantes y limpiando después.',
	},
	{
		name: 'staff_fundraiser',
		description:
			'Voluntario que ayuda a recaudar fondos para el refugio, como organizar eventos, solicitar donaciones y promover la misión del refugio.',
	},
];

export const getUserRoleName = (name: UserRoleType) => {
	return {
		admin: 'Administrador',
		staff_dog_walker: 'Paseador de perros',
		staff_socializer: 'Socializador',
		staff_adoption_event_volunteer: 'Voluntario en eventos de adopción',
		staff_fundraiser: 'Recaudador de fondos',
	}[name];
};

export const getUserRoleColor = (name: UserRoleType) => {
	return {
		admin: 'bg-gradient-to-r from-blue-900 to-blue-500 text-white font-bold',
		staff_dog_walker:
			'bg-gradient-to-r from-green-600 to-emerald-500 text-white font-bold',
		staff_socializer:
			'bg-gradient-to-r from-purple-900 to-indigo-400 text-white font-bold',
		staff_adoption_event_volunteer:
			'bg-gradient-to-r from-sky-700 to-blue-500 text-white font-bold',
		staff_fundraiser:
			'bg-gradient-to-r from-cyan-500 to-pink-600 text-white font-bold',
	}[name];
};
