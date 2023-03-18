import LegendStatus from './HeaderLegends.vue';
import { render } from '@testing-library/vue';
import { PersonRoleTooltip } from '@/models';

const legends: PersonRoleTooltip[] = [
	{
		name: 'adopter',
		description: 'test 1',
	},
	{
		name: 'emergency_foster',
		description: 'test 2',
	},
	{
		name: 'medical_foster',
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
