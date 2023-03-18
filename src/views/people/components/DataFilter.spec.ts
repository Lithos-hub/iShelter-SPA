import DataFilters from './DataFilters.vue';
import { render } from '@testing-library/vue';

describe('Component: DataFilters', () => {
	it('renders correctly', () => {
		const view = render(DataFilters);
		expect(view).toBeTruthy();
	});
	it('renders search input and the filter selector', () => {
		const { getAllByTestId } = render(DataFilters);
		expect(getAllByTestId('data-filters').length).toBe(2);
	});
});
