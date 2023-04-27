import { render } from '@testing-library/vue';
import CategoryChip from './CategoryChip.vue';

describe('Component: CategoryChip', () => {
	test('renders the correct application category name', () => {
		const category = 'volunteer';
		const { getByText } = render(CategoryChip, { props: { category } });

		expect(getByText('Voluntario')).toBeTruthy();
	});

	test('applies the correct class based on the category color', () => {
		const category = 'volunteer';
		const { getByTestId } = render(CategoryChip, { props: { category } });
		const chip = getByTestId('category-chip');

		expect(chip.getAttribute('class')).toContain(`bg-primary-1`);
	});
});
