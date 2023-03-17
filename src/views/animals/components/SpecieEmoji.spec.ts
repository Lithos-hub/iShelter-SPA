import SpecieEmoji from './SpecieEmoji.vue';
import { render } from '@testing-library/vue';

const getRender = (specie: 'dog' | 'cat') =>
	render(SpecieEmoji, {
		props: {
			specie,
		},
	});

describe('Component: SpecieEmoji', () => {
	it('renders correctly', () => {
		const view = getRender('dog');
		expect(view).toBeTruthy();
	});
	it('renders 🐶 emoji if the specie prop is dog', () => {
		const { getByText } = getRender('dog');
		expect(getByText('🐶')).toBeTruthy();
	});
	it('renders 🐱 emoji if the specie prop is cat', () => {
		const { getByText } = getRender('cat');
		expect(getByText('🐱')).toBeTruthy();
	});
});
