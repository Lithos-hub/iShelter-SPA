import { User } from '@/models';
import ListCard from './ListCard.vue';
import { render } from '@testing-library/vue';

const user: User = {
	id: 1,
	user_name: 'John',
	user_lastname: 'Doe',
	email: 'johndoe@example.com',
	phone_first: '952 00 00 00',
	phone_second: '600 00 00 00',
	avatar:
		'https://this-person-does-not-exist.com/img/avatar-gen1137c03937fad3c64b6df4124a83b7a6.jpg',
	role: 'staff',
};

const getRender = () =>
	render(ListCard, {
		props: {
			data: user,
		},
	});

describe('Component: ListCard', () => {
	it('renders correctly', () => {
		const view = getRender();
		expect(view).toBeTruthy();
	});
	it('renders the computed full name correctly', () => {
		const { getByText } = getRender();
		expect(getByText('John Doe')).toBeTruthy();
	});
});
