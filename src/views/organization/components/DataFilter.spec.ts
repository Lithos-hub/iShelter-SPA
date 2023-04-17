import DataFilters from './DataFilters.vue';
import { render } from '@testing-library/vue';

describe('Component: DataFilters', () => {
	it('renders correctly', () => {
		const view = render(DataFilters);
		expect(view).toBeTruthy();
	});
});
