<!-- eslint-disable vue/valid-v-model -->

<template>
	<v-form ref="generatorRef" class="grid grid-cols-12 gap-5" v-bind="$attrs">
		<div
			v-for="({ colStart, colEnd, renderElement, name, rules, items, ...rest }, i) of components"
			:key="i"
			:style="{ 'grid-column-start': colStart, 'grid-column-end': colEnd }">
			<v-text-field
				v-if="renderElement === 'textfield'"
				v-model="vModelForm[name as keyof typeof vModelForm]"
				:required="rules"
				:rules="rules || []"
				:name="name"
				v-bind="rest" />

			<v-textarea
				v-if="renderElement === 'textarea'"
				v-model="vModelForm[name as keyof typeof vModelForm]"
				:required="rules"
				:rules="rules || []"
				:name="name"
				v-bind="rest" />

			<v-select
				v-if="renderElement === 'select'"
				v-model="vModelForm[name as keyof typeof vModelForm]"
				:required="rules"
				:rules="rules || []"
				:name="name"
				:items="items as readonly unknown[] || []"
				item-title="label"
				item-value="value"
				v-bind="rest" />

			<v-autocomplete
				v-if="renderElement === 'autocomplete'"
				v-model="vModelForm[name as keyof typeof vModelForm]"
				:required="rules"
				:rules="rules || []"
				:name="name"
				item-title="label"
				item-value="value"
				v-bind="rest" />

			<v-checkbox
				v-if="renderElement === 'checkbox'"
				v-model="vModelForm[name as keyof typeof vModelForm]"
				:required="rules"
				:rules="rules || []"
				:name="name"
				v-bind="rest" />

			<v-combobox
				v-if="renderElement === 'combobox'"
				v-model="vModelForm[name as keyof typeof vModelForm]"
				:required="rules"
				:rules="rules || []"
				:name="name"
				v-bind="rest" />

			<v-radio-group
				v-if="renderElement === 'radiobutton'"
				v-model="vModelForm[name as keyof typeof vModelForm]"
				:required="rules"
				:rules="rules || []"
				:name="name">
				<v-radio v-bind="rest" />
			</v-radio-group>

			<v-range-slider
				v-if="renderElement === 'range-slider'"
				v-model="vModelForm[name as keyof typeof vModelForm] as number[]"
				:required="rules"
				step="1"
				thumb-label="always"
				:rules="rules || []"
				:name="name"
				v-bind="rest" />

			<v-slider
				v-if="renderElement === 'slider'"
				v-model="vModelForm[name as keyof typeof vModelForm] as string | number"
				:required="rules"
				step="1"
				thumb-label="always"
				:rules="rules || []"
				:name="name"
				v-bind="rest" />

			<v-switch
				v-if="renderElement === 'switch'"
				v-model="vModelForm[name as keyof typeof vModelForm]"
				:required="rules"
				:rules="rules || []"
				:name="name"
				v-bind="rest" />

			<DragDropInput
				v-if="renderElement === 'dragdropinput'"
				:label="rest.label!"
				@select="(data: File) => vModelForm[name as keyof typeof vModelForm] = data" />
		</div>
	</v-form>
</template>

<script setup lang="ts">
import { FormGeneratorInterface } from '@/models';
import { ref } from 'vue';
import { useFormGeneratorStore } from '@/store';

interface Props {
	components: FormGeneratorInterface[];
}

const props = defineProps<Props>();

const generatorRef = ref<HTMLFormElement | null>(null);

const { vModelForm } = storeToRefs(useFormGeneratorStore());
const { setRef, setVModelForm } = useFormGeneratorStore();

setVModelForm(
	props.components.reduce(
		(acc, { name, initialValue }) => ({
			...acc,
			[name as keyof typeof vModelForm]: initialValue,
		}),
		{}
	)
);

onMounted(() => {
	setRef(generatorRef.value as HTMLFormElement);
});
</script>
