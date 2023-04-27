import { PersonRoleType } from '@/models';
import { getPersonRoleColor, getPersonRoleName } from './person';

describe('getPersonRoleName_function', () => {
	// Tests that getPersonRoleName returns the correct role name for each valid PersonRoleType.
	it('test_get_person_role_name_with_valid_role_type', () => {
		expect(getPersonRoleName('potential_adopter')).toBe('Adoptante potencial');
		expect(getPersonRoleName('adopter')).toBe('Adoptante');
		expect(getPersonRoleName('senior_adopter')).toBe('Adoptante Senior');
		expect(getPersonRoleName('foster')).toBe('Casa de acogida');
		expect(getPersonRoleName('short_term_foster')).toBe('Acog. a corto plazo');
		expect(getPersonRoleName('long_term_foster')).toBe('Acog. de larga duración');
		expect(getPersonRoleName('medical_foster')).toBe('Acog. médica');
		expect(getPersonRoleName('emergency_foster')).toBe('Acog. de emergencia');
	});

	// Tests that getPersonRoleName returns the corresponding role name for each valid PersonRoleType.
	it('test_get_person_role_name_returns_correct_role_name', () => {
		expect(getPersonRoleName('potential_adopter')).toBe('Adoptante potencial');
		expect(getPersonRoleName('adopter')).toBe('Adoptante');
		expect(getPersonRoleName('senior_adopter')).toBe('Adoptante Senior');
		expect(getPersonRoleName('foster')).toBe('Casa de acogida');
		expect(getPersonRoleName('short_term_foster')).toBe('Acog. a corto plazo');
		expect(getPersonRoleName('long_term_foster')).toBe('Acog. de larga duración');
		expect(getPersonRoleName('medical_foster')).toBe('Acog. médica');
		expect(getPersonRoleName('emergency_foster')).toBe('Acog. de emergencia');
	});

	// Tests that getPersonRoleName returns undefined when an invalid PersonRoleType is provided.
	it('test_get_person_role_name_with_invalid_role_type', () => {
		expect(getPersonRoleName('invalid_role_type' as PersonRoleType)).toBeUndefined();
	});

	// Tests that getPersonRoleName is case-sensitive.
	it('test_get_person_role_name_case_sensitive', () => {
		expect(getPersonRoleName('adopter')).toBe('Adoptante');
		expect(getPersonRoleName('ADOPTER' as PersonRoleType)).toBeUndefined();
	});

	// Tests that getPersonRoleName handles all valid PersonRoleTypes.
	it('test_get_person_role_name_all_valid_role_types', () => {
		const validRoles: PersonRoleType[] = [
			'potential_adopter',
			'adopter',
			'senior_adopter',
			'foster',
			'short_term_foster',
			'long_term_foster',
			'medical_foster',
			'emergency_foster',
		];
		validRoles.forEach((role) => {
			expect(getPersonRoleName(role)).toBeDefined();
		});
	});

	// Tests that getPersonRoleName does not require any mocks.
	it('test_get_person_role_name_no_mock', () => {
		expect(getPersonRoleName('adopter')).toBe('Adoptante');
	});
});

describe('getPersonRoleColor_function', () => {
	// Tests that the function returns a string.
	it('test_get_person_role_color_returns_string', () => {
		const result = getPersonRoleColor('potential_adopter');
		expect(typeof result).toBe('string');
	});

	// Tests that the function returns the color in the correct format (e.g. 'bg-[#123456] text-white font-bold').
	it('test_get_person_role_color_returns_correct_format', () => {
		const result = getPersonRoleColor('adopter');
		expect(result).toBe('bg-[#43aa8b] text-white font-bold');
	});

	// Tests that the function returns undefined for an invalid PersonRoleType input.
	it('test_get_person_role_color_with_invalid_input', () => {
		const result = getPersonRoleColor('invalid_role' as PersonRoleType);
		expect(result).toBeUndefined();
	});

	// Tests that the function returns undefined when no input is provided.
	it('test_get_person_role_color_handles_empty_input', () => {
		const result = getPersonRoleColor('' as PersonRoleType);
		expect(result).toBeUndefined();
	});

	// Tests that the function returns the correct color for a valid PersonRoleType input.
	it('test_get_person_role_color_with_valid_input', () => {
		const result = getPersonRoleColor('medical_foster');
		expect(result).toBe('bg-[#f94144] text-white font-bold');
	});

	// Tests that the function returns undefined when null is provided as input.
	it('test_get_person_role_color_handles_null_input', () => {
		const result = getPersonRoleColor(null as unknown as PersonRoleType);
		expect(result).toBeUndefined();
	});
});
