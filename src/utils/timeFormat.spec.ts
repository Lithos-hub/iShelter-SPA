import { formatTime } from './timeFormat';

describe('formatTime_function', () => {
	// Tests that inputting a valid timestamp returns a formatted date string.
	it('test_valid_timestamp_returns_formatted_date_string', () => {
		const timestamp = 1627896000000; // August 2, 2021
		expect(formatTime(timestamp)).toBe('2/8/2021');
	});

	// Tests that inputting 0 returns a formatted date string.
	it('test_inputting_zero_returns_formatted_date_string', () => {
		const timestamp = 0;
		expect(formatTime(timestamp)).toBe('1/1/1970');
	});

	// Tests that the formatted date string includes the month, day, and year.
	it('test_formatted_date_string_includes_month_day_and_year', () => {
		const timestamp = 1627896000000; // August 2, 2021
		const formattedDate = formatTime(timestamp);
		expect(formattedDate).toMatch(/\d{1,2}\/\d{1,2}\/\d{4}/);
	});

	// Tests that the formatted date string follows the locale of the user's system.
	it('test_formatted_date_string_follows_user_system_locale', () => {
		const timestamp = 1627896000000; // August 2, 2021
		const formattedDate = formatTime(timestamp);
		expect(formattedDate).toBe(new Date(timestamp).toLocaleDateString());
	});
});
