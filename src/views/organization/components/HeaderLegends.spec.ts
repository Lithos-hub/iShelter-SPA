import LegendStatus from './HeaderLegends.vue';
import { render } from '@testing-library/vue';
import { UserRoleTooltip } from '@/models';

const legends: UserRoleTooltip[] = [
	{
		name: 'admin',
		description: 'test 1',
	},
	{
		name: 'staff_adoption_event_volunteer',
		description: 'test 2',
	},
	{
		name: 'staff_dog_walker',
		description: 'test 3',
	},
];

describe('Component: LegendStatus', () => {
	it('renders correctly', () => {
		const view = render(LegendStatus);
		expect(view).toBeTruthy();
	});
	it('renders search input and the filter selector', () => {
		const { getAllByTestId } = render(LegendStatus, {
			props: {
				legends,
			},
		});
		expect(getAllByTestId('legend-status').length).toBe(3);
	});
});
