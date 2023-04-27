import { ApplicationCategory, ApplicationStatus } from '@/models';
import {
	getApplicationCategoryColor,
	getApplicationCategoryName,
	getApplicationStatusColor,
	getApplicationStatusName,
} from './applications';

describe('getApplicationCategoryName_function', () => {
	// Tests that providing a valid ApplicationCategory returns the corresponding category name.
	it('test_valid_application_category_returns_correct_name', () => {
		const result = getApplicationCategoryName('adopter');
		expect(result).toBe('Adoptante');
	});

	// Tests that providing an invalid ApplicationCategory returns undefined.
	it('test_invalid_application_category_returns_undefined', () => {
		const result = getApplicationCategoryName('invalid_category' as ApplicationCategory);
		expect(result).toBeUndefined();
	});

	// Tests that providing an empty input returns undefined.
	it('test_empty_input_returns_undefined', () => {
		const result = getApplicationCategoryName('' as ApplicationCategory);
		expect(result).toBeUndefined();
	});

	// Tests that the function returns a string.
	it('test_return_type_is_string', () => {
		const result = getApplicationCategoryName('volunteer');
		expect(typeof result).toBe('string');
	});

	// Tests that providing a null input returns undefined.
	it('test_null_input_returns_undefined', () => {
		const result = getApplicationCategoryName(null as unknown as ApplicationCategory);
		expect(result).toBeUndefined();
	});

	// Tests that providing a non-string input returns undefined.
	it('test_non_string_input_returns_undefined', () => {
		const result = getApplicationCategoryName(123 as unknown as ApplicationCategory);
		expect(result).toBeUndefined();
	});
});

describe('getApplicationStatusName_function', () => {
	// Tests that providing a valid status name returns the corresponding translated name.
	it('test_valid_status_name_returns_translated_name', () => {
		expect(getApplicationStatusName('new')).toBe('Nuevo');
		expect(getApplicationStatusName('read')).toBe('Leído');
		expect(getApplicationStatusName('deleted')).toBe('Borrado');
		expect(getApplicationStatusName('denied')).toBe('Rechazado');
		expect(getApplicationStatusName('important')).toBe('Importante');
	});

	// Tests that providing a valid status name that is not in the map returns an empty string.
	it('test_valid_status_name_not_in_map_returns_empty_string', () => {
		expect(getApplicationStatusName('invalid' as ApplicationStatus)).toBe('');
	});

	// Tests that the function returns an empty string when called with a null or undefined status value.
	it('test_null_or_undefined_status_value_returns_empty_string', () => {
		expect(getApplicationStatusName(null as unknown as ApplicationStatus)).toBe('');
		expect(getApplicationStatusName(undefined as unknown as ApplicationStatus)).toBe('');
	});
});

describe('getApplicationCategoryColor_function', () => {
	// Tests that providing a valid ApplicationCategory name returns a corresponding color.
	it('test_valid_application_category_returns_corresponding_color', () => {
		const color = getApplicationCategoryColor('adopter');
		expect(color).toEqual('bg-[#43aa8b] text-white font-bold');
	});

	// Tests that providing an invalid ApplicationCategory name returns undefined.
	it('test_invalid_application_category_returns_undefined', () => {
		const color = getApplicationCategoryColor('invalid_category' as ApplicationCategory);
		expect(color).toBeUndefined();
	});

	// Tests that the function returns a string.
	it('test_function_returns_string', () => {
		const color = getApplicationCategoryColor('adopter');
		expect(typeof color).toEqual('string');
	});
});

describe('getApplicationStatusColor_function', () => {
	// Tests that providing a valid ApplicationStatus name returns the corresponding color.
	it('test_valid_application_status_returns_correct_color', () => {
		const color = getApplicationStatusColor('new');
		expect(color).toEqual('border border-blue-900 bg-blue-400 font-bold text-white');
	});

	// Tests that providing an invalid ApplicationStatus name returns undefined.
	it('test_invalid_application_status_returns_undefined', () => {
		const color = getApplicationStatusColor('invalid' as ApplicationStatus);
		expect(color).toBeUndefined();
	});

	// Tests that the function returns undefined for a name that is not in the statusColors map.
	it('test_name_not_in_map_returns_undefined', () => {
		const color = getApplicationStatusColor('approved' as ApplicationStatus);
		expect(color).toBeUndefined();
	});

	// Tests that providing an empty string as name returns undefined.
	it('test_empty_name_returns_undefined', () => {
		const color = getApplicationStatusColor('' as ApplicationStatus);
		expect(color).toBeUndefined();
	});

	// Tests that providing null as name returns undefined.
	it('test_null_name_returns_undefined', () => {
		const color = getApplicationStatusColor(null as unknown as ApplicationStatus);
		expect(color).toBeUndefined();
	});
});
