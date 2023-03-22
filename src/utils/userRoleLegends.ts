import { UserRoleTooltip, UserRoleType } from '@/models';

export const userRoleLegends: UserRoleTooltip[] = [
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

export const getUserRoleList = () => {
	return userRoleLegends.map(({ name }) => {
		return {
			label: getUserRoleName(name),
			value: name,
		};
	});
};

export const getUserRoleColor = (name: UserRoleType) => {
	return {
		admin: 'bg-[#264653] text-white font-bold',
		staff_dog_walker: 'bg-[#2a9d8f] text-white font-bold',
		staff_socializer: 'bg-[#e9c46a] text-white font-bold',
		staff_adoption_event_volunteer: 'bg-[#f4a261] text-white font-bold',
		staff_fundraiser: 'bg-[#e76f51] text-white font-bold',
	}[name];
};
