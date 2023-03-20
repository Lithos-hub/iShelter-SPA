type ValidationResult = string | boolean;
type ValidationRule =
	| ValidationResult
	| PromiseLike<ValidationResult>
	| ((value: unknown) => ValidationResult)
	| ((value: unknown) => PromiseLike<ValidationResult>);

type ComponentToRender =
	| 'textfield'
	| 'textarea'
	| 'select'
	| 'autocomplete'
	| 'checkbox'
	| 'combobox'
	| 'radiobutton'
	| 'slider'
	| 'range-slider'
	| 'switch'
	| 'dragdropinput';

export interface FormGeneratorInterface {
	/* REQUIRED */ renderElement: ComponentToRender;
	/* REQUIRED */ name: string;
	/* REQUIRED */ colStart: number;
	/* REQUIRED */ colEnd: number;
	initialValue:
		| string
		| number
		| string[]
		| number[]
		| object[]
		| []
		| object
		| boolean
		| undefined;
	placeholder?: string;
	class?: string;
	items?: Array<SelectItem> | ComputedRef<SelectItem[]>;
	rules?: ValidationRule[];
	label?: string;
	reverse?: boolean;
	type?: string;
	error?: boolean;
	active?: boolean;
	direction?: 'horizontal' | 'vertical';
	autofocus?: boolean;
	disabled?: boolean;
	readonly?: boolean;
	messages?: string | string[];
	variant?: 'filled' | 'outlined' | 'plain' | 'underlined' | 'solo';
	focused?: boolean;
	errorMessages?: string | string[];
	maxErrors?: string | number;
	clearable?: boolean;
	dirty?: boolean;
	persistentClear?: boolean;
	singleLine?: boolean;
	persistentHint?: boolean;
	persistentPlaceholder?: boolean;
	persistentCounter?: boolean;
}

export type SelectItem = {
	label: string;
	value: string | number;
};
