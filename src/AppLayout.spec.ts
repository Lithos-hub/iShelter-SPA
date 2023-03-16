import AppLayout from './AppLayout.vue';
import { render } from '@testing-library/vue';

describe('Component: AppLayout', () => {
	it('renders correctly', () => {
		const view = render(AppLayout);
		expect(view).toBeTruthy();
	});
});
