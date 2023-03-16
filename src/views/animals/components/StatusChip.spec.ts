import StatusChip from './StatusChip.vue';
import { render } from '@testing-library/vue';

// TODO: In the future it will be more animal status
const getRender = (animalStatus: 'adopted' | 'adoptable' | 'quarantine') =>
	render(StatusChip, {
		props: {
			animalStatus,
		},
	});

describe('Component: StatusChip', () => {
	it('renders correctly', () => {
		const view = getRender('adopted');
		expect(view).toBeTruthy();
	});
	it('renders the adoptable chip with bg-sky-300 color', () => {
		const { getByTestId } = getRender('adoptable');
		expect(
			getByTestId('status-chip').classList.contains('bg-sky-300')
		).toBeTruthy();
	});
	it('renders the quarantine chip with bg-purple-300 color', () => {
		const { getByTestId } = getRender('quarantine');
		expect(
			getByTestId('status-chip').classList.contains('bg-purple-300')
		).toBeTruthy();
	});
});
