import RoleChip from './RoleChip.vue';
import { render } from '@testing-library/vue';
import { PersonRoleType } from '@/models';

const getRender = (personRole: PersonRoleType) =>
	render(RoleChip, {
		props: {
			personRole,
		},
	});

describe('Component: RoleChip', () => {
	it('renders correctly', () => {
		const view = getRender('potential_adopter');
		expect(view).toBeTruthy();
	});
	it('renders the adoptable chip with bg-sky-300 color', () => {
		const { getByTestId } = getRender('potential_adopter');
		expect(
			getByTestId('status-chip').classList.contains('from-blue-900')
		).toBeTruthy();
	});
	it('renders the quarantine chip with bg-purple-300 color', () => {
		const { getByTestId } = getRender('senior_adopter');
		expect(
			getByTestId('status-chip').classList.contains('from-purple-900')
		).toBeTruthy();
	});
});
