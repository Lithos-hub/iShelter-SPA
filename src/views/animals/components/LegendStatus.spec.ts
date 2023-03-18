import LegendStatus from './LegendStatus.vue';
import { render } from '@testing-library/vue';
import { Legend } from '@/models';

const legends: Legend[] = [
	{
		name: 'adoptable',
		description: 'test 1',
	},
	{
		name: 'adopted',
		description: 'test 2',
	},
	{
		name: 'awaiting_spay',
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
