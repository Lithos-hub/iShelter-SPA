// Utilities
import { defineStore } from 'pinia';

type vModelForm = Record<
	string,
	string | number | boolean | string[] | number[] | undefined
>;

interface RootState {
	formRef: HTMLFormElement | null;
	vModelForm: vModelForm;
}

export const useFormGeneratorStore = defineStore('formGenerator', {
	state: () =>
		({
			formRef: null,
			vModelForm: {},
		} as RootState),
	actions: {
		setRef(ref: HTMLFormElement) {
			this.formRef = ref;
		},
		setVModelForm(values: vModelForm) {
			this.vModelForm = values;
		},
		getVModelForm() {
			return Object.keys(this.vModelForm).reduce((acc, curr) => {
				return {
					...acc,
					[curr]: this.vModelForm[curr],
				};
			}, {});
		},
		async validateForm() {
			const vForm = { ...this.formRef };
			return await vForm.validate();
		},
	},
});
