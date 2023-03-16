import { Animal } from '@/models';
import ListCard from './ListCard.vue';
import { render } from '@testing-library/vue';

const animal: Animal = {
	id: 1,
	gender: 'test-gender',
	name: 'test-name',
	status: 'test-status',
	specie: 'test-specie',
	breed: 'test-breed',
	location: 'test-location',
	microchip: 'test-microchip',
	weight: 1,
	weight_type: 'test-weight_type',
	date_birth: 1,
	intake_condition: 'test-intake_condition',
	intake_date: 1,
	microchip_number: 'test-microchip_number',
	image: 'http://test-image.jpg',
};

const getRender = () =>
	render(ListCard, {
		props: {
			data: animal,
		},
	});

describe('Component: ListCard', () => {
	it('renders correctly', () => {
		const view = getRender();
		expect(view).toBeTruthy();
	});
	it('renders the prop data correctly', () => {
		const { getByText } = getRender();
		expect(getByText('test-name')).toBeTruthy();
		expect(getByText('test-status')).toBeTruthy();
		expect(getByText('test-breed')).toBeTruthy();
	});
});
