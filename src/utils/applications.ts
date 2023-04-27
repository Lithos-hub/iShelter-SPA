import { ApplicationCategory, ApplicationStatus } from '@/models';

const categoryNames = new Map<ApplicationCategory, string>([
	['volunteer', 'Voluntario'],
	['adopter', 'Adoptante'],
	['senior_adopter', 'Adoptante Senior'],
	['foster', 'Casa de acogida'],
	['short_term_foster', 'Acog. a corto plazo'],
	['long_term_foster', 'Acog. de larga duración'],
	['medical_foster', 'Acog. médica'],
	['emergency_foster', 'Acog. de emergencia'],
]);

const statusNames = new Map<ApplicationStatus, string>([
	['new', 'Nuevo'],
	['read', 'Leído'],
	['deleted', 'Borrado'],
	['denied', 'Rechazado'],
	['important', 'Importante'],
]);

const categoryColors = new Map<ApplicationCategory, string>([
	['volunteer', 'bg-primary-1 text-white font-bold'],
	['adopter', 'bg-[#43aa8b] text-white font-bold'],
	['senior_adopter', 'bg-[#6a4c93] text-white font-bold'],
	['foster', 'bg-[#8f2d56] text-white font-bold'],
	['short_term_foster', 'bg-[#0fa3b1] text-white font-bold'],
	['long_term_foster', 'bg-[#463f3a] text-white font-bold'],
	['medical_foster', 'bg-[#f94144] text-white font-bold'],
	['emergency_foster', 'bg-[#fe7f2d] text-white font-bold'],
]);

const statusColors = new Map<ApplicationStatus, string>([
	['new', 'border border-blue-900 bg-blue-400 font-bold text-white'],
	['read', 'border border-gray-900 bg-gray-400 font-bold text-white'],
	['deleted', 'border border-red-900 bg-red-400 font-bold text-white'],
	['denied', 'border border-slate-900 bg-slate-400 font-bold text-white'],
	['important', 'border border-amber-900 bg-amber-400 font-bold text-white'],
]);

export const getApplicationCategoryName = (name: ApplicationCategory) => {
	return categoryNames.get(name);
};
export const getApplicationStatusName = (status: ApplicationStatus) => {
	return statusNames.get(status) || '';
};

export const getApplicationCategoryColor = (name: ApplicationCategory) => {
	return categoryColors.get(name);
};

export const getApplicationStatusColor = (name: ApplicationStatus) => {
	return statusColors.get(name);
};
