import { describe, it, expect } from 'vitest';
import { getAnimalStatusName } from './animalStatusLegends';
import { StatusType } from '@/models';

describe('getAnimalStatusName_function', () => {
	// Tests that each valid status type returns the corresponding name.
	it('test_happy_path: should return the correct name for each valid status type', () => {
		expect(getAnimalStatusName('adoptable')).toBe('En adopción');
		expect(getAnimalStatusName('pending')).toBe('Pendiente');
		expect(getAnimalStatusName('adopted')).toBe('Adoptado');
		expect(getAnimalStatusName('medical_treatment')).toBe('En tratamiento');
		expect(getAnimalStatusName('quarantine')).toBe('En cuarentena');
		expect(getAnimalStatusName('awaiting_spay')).toBe(
			'Castración/Esterilización'
		);
		expect(getAnimalStatusName('training')).toBe('En entrenamiento');
		expect(getAnimalStatusName('recovering')).toBe('En recuperación');
		expect(getAnimalStatusName('observation')).toBe('En observación');
		expect(getAnimalStatusName('geriatrics_care')).toBe('Cuidados geriátricos');
		expect(getAnimalStatusName('temp_no_adoptable')).toBe('No adoptable');
		expect(getAnimalStatusName('in_transit')).toBe('En tránsito');
		expect(getAnimalStatusName('study')).toBe('En estudio');
		expect(getAnimalStatusName('deceased')).toBe('');
	});

	// Tests that passing an invalid status type returns undefined.
	it('test_edge_case: should return undefined when passing an invalid status type', () => {
		expect(
			getAnimalStatusName('invalid_status_type' as StatusType)
		).toBeUndefined();
	});

	// Tests that the function returns the correct name for a specific status type.
	it('test_general_behavior: should return the correct name for a specific status type', () => {
		expect(getAnimalStatusName('medical_treatment')).toBe('En tratamiento');
	});

	// Tests that the status type 'adoptable' returns the correct name.
	it('test_happy_path_adoptable', () => {
		const statusName = getAnimalStatusName('adoptable');
		expect(statusName).toBe('En adopción');
	});

	// Tests that the status type 'adopted' returns the correct name.
	it('test_happy_path_adopted', () => {
		const statusName = getAnimalStatusName('adopted');
		expect(statusName).toBe('Adoptado');
	});

	// Tests that the status type 'deceased' returns an empty string.
	it('test_happy_path_deceased', () => {
		const statusName = getAnimalStatusName('deceased');
		expect(statusName).toBe('');
	});
});
