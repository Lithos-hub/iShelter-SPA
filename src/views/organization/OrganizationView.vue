<template>
	<FormGenerator :components="componentsList" />
	<BaseButton title="Submit form" @action="onSubmit" />
</template>

<script lang="ts" setup>
import { FormGeneratorInterface } from '@/models/FormGenerator.interface';
import { useFormGeneratorStore } from '@/store/FormGenerator';

const { getVModelForm, validateForm } = useFormGeneratorStore();

const componentsList: FormGeneratorInterface[] = [
	{
		renderElement: 'textfield',
		name: 'item_textfield',
		label: 'Write your email',
		type: 'email',
		colStart: 1,
		colEnd: 7,
		variant: 'solo',
		rules: [(v) => !!v || 'Required!'],
		initialValue: undefined,
	},
	{
		renderElement: 'textarea',
		name: 'item_textarea',
		label: 'Write your bio',
		type: 'text',
		colStart: 7,
		colEnd: 13,
		variant: 'solo',
		initialValue: undefined,
	},
	{
		renderElement: 'select',
		name: 'item_select',
		label: 'Select an item',
		colStart: 1,
		colEnd: 5,
		variant: 'solo',
		items: ['item 1', 'item 2', 'item 3'],
		initialValue: undefined,
		rules: [(v) => !!v || 'Required!'],
	},
	{
		renderElement: 'autocomplete',
		name: 'item_autocomplete',
		label: 'Search and select an item',
		colStart: 5,
		colEnd: 9,
		variant: 'solo',
		items: ['item 1', 'item 2', 'item 3'],
		initialValue: undefined,
	},
	{
		renderElement: 'checkbox',
		name: 'item_checkbox',
		label: 'True or false?',
		colStart: 9,
		colEnd: 13,
		initialValue: false,
	},
];

const onSubmit = async () => {
	const { valid } = await validateForm();
	if (valid) {
		console.log('Submit!', getVModelForm());
	}
};
</script>
