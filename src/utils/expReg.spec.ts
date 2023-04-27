import { checkEmail } from './expReg';

describe('checkEmail_function', () => {
	// Tests that a valid email address returns true.
	it('test_valid_email', () => {
		expect(checkEmail('example@example.com')).toBe(true);
	});

	// Tests that an email address with numbers and special characters returns true.
	it('test_email_with_numbers_and_special_chars', () => {
		expect(checkEmail('example123%+-@example.com')).toBe(true);
	});

	// Tests that an empty string returns false.
	it('test_empty_email', () => {
		expect(checkEmail('')).toBe(false);
	});

	// Tests that an email address with missing @ or . returns false.
	it('test_email_missing_at_or_dot', () => {
		expect(checkEmail('exampleexample.com')).toBe(false);
		expect(checkEmail('example@examplecom')).toBe(false);
	});

	// Tests that an email address with multiple @ or . returns false.
	it('test_email_with_multiple_at_or_dot', () => {
		expect(checkEmail('example@example@example.com')).toBe(false);
	});

	// Tests that an email address with invalid characters returns false.
	it('test_email_with_invalid_chars', () => {
		expect(checkEmail('example!@example.com')).toBe(false);
		expect(checkEmail('example@example#.com')).toBe(false);
	});
});
