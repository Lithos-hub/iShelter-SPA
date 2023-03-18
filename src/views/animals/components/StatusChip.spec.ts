import StatusChip from './StatusChip.vue';
import { render } from '@testing-library/vue';
import { StatusType } from '@/models';

const getRender = (animalStatus: StatusType) =>
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
	it('renders the adoptable chip with emerald color', () => {
		const { getByTestId } = getRender('adoptable');
		expect(
			getByTestId('status-chip').classList.contains('from-emerald-500')
		).toBeTruthy();
	});
	it('renders the quarantine chip with purple color', () => {
		const { getByTestId } = getRender('quarantine');
		expect(
			getByTestId('status-chip').classList.contains('from-purple-300')
		).toBeTruthy();
	});
});
