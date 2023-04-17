import RoleChip from './RoleChip.vue';
import { render } from '@testing-library/vue';
import { UserRoleType } from '@/models';

const getRender = (userRole: UserRoleType) =>
	render(RoleChip, {
		props: {
			userRole,
		},
	});

describe('Component: RoleChip', () => {
	it('renders correctly', () => {
		const view = getRender('admin');
		expect(view).toBeTruthy();
	});
	it('renders the admin role with from-blue-900 color', () => {
		const { getByTestId } = getRender('admin');
		expect(
			getByTestId('role-chip').classList.contains('bg-[#264653]')
		).toBeTruthy();
	});
	it('renders the correct name for staff_fundraiser', () => {
		const { getByText } = getRender('staff_fundraiser');
		expect(getByText('Recaudador de fondos')).toBeTruthy();
	});
});
