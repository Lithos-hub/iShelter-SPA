import { computed } from 'vue';

export const useDateTransformer = (date_birth: number) => {
	return computed(() => {
		const now = new Date().getTime();
		const diff = now - date_birth;
		const millisInYear = 1000 * 60 * 60 * 24 * 365;

		if (diff < millisInYear) {
			// Age in months if is a puppy
			const millisInMonth = 1000 * 60 * 60 * 24 * 30;
			const age = Math.floor(diff / millisInMonth);
			return `${age} ${age === 1 ? 'mes' : 'meses'}`;
		} else {
			const age = Math.floor(diff / millisInYear);
			return `${age} ${age === 1 ? 'año' : 'años'}`;
		}
	});
};
