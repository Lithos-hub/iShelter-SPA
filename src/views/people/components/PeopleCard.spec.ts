import { Person } from '@/models';
import ListCard from './PeopleCard.vue';
import { render } from '@testing-library/vue';

const person: Person = {
	id: 1,
	person_name: 'María',
	person_lastname: 'Pérez Martín',
	email: 'dominio@ejemplo.com',
	role: 'adopter',
	date_birth: 3424324234,
	phone: '600 00 00 00',
	street_1: 'Calle Remedios, 52',
	street_2: 'Escalera 2, 5º A',
	city: 'Málaga',
	zip_code: '29014',
	region: 'Andalucía',
};

const getRender = () =>
	render(ListCard, {
		props: {
			data: person,
		},
	});

describe('Component: ListCard', () => {
	it('renders correctly', () => {
		const view = getRender();
		expect(view).toBeTruthy();
	});
	it('renders the computed full name correctly', () => {
		const { getByText } = getRender();
		expect(getByText('María Pérez Martín')).toBeTruthy();
	});
});
