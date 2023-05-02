<template>
	<ViewHeader title="Mi cuenta" />
	<CardLayout class="p-10 flex gap-10 items-center">
		<div class="w-full">
			<FormGenerator :components="componentsList" />
		</div>
		<div
			class="relative hover:opacity-75 cursor-pointer"
			@mouseover="mouseover = true"
			@mouseleave="mouseover = false"
			@click="inputFile?.click()">
			<v-img
				src="https://this-person-does-not-exist.com/img/avatar-11326f146110d286731a8bc4b9b072f4.jpg"
				aspect-ratio="1/1"
				width="250"
				class="rounded-full ml-auto" />
			<div
				v-if="mouseover"
				v-motion
				:initial="{
					top: '75%',
					opacity: 0,
				}"
				:enter="{
					top: '50%',
					opacity: 1,
					transition: {
						type: 'spring',
						stiffness: 250,
						damping: 100,
						mass: 5,
					},
				}"
				class="absolute left-1/2 -translate-x-1/2 -translate-y-1/2">
				<v-icon icon="mdi-camera" size="100" color="white" />
			</div>
		</div>
		<input
			ref="inputFile"
			type="file"
			class="hidden"
			@change="(e: Event) => onSelectedFile(e as HTMLInputEvent)" />
	</CardLayout>
</template>

<script setup lang="ts">
import { FormGeneratorInterface } from '@/models';
import { checkEmail } from '@/utils';

interface HTMLInputEvent extends Event {
	target: HTMLInputElement & EventTarget;
}

const emit = defineEmits(['select']);

const inputFile = ref<HTMLInputElement | null>(null);
const mouseover = ref(false);
const componentsList: FormGeneratorInterface[] = [
	{
		renderElement: 'textfield',
		name: 'user_name',
		colStart: 1,
		colEnd: 13,
		initialValue: 'Jane',
		variant: 'solo',
		label: 'Nombre',
		rules: [(v) => !!v || 'Campo obligatorio'],
	},
	{
		renderElement: 'textfield',
		name: 'user_lastname',
		colStart: 1,
		colEnd: 13,
		initialValue: 'Doe',
		variant: 'solo',
		label: 'Apellidos',
		rules: [(v) => !!v || 'Campo obligatorio'],
	},
	{
		renderElement: 'textfield',
		type: 'number',
		name: 'phone',
		colStart: 1,
		colEnd: 13,
		initialValue: 600000000,
		variant: 'solo',
		label: 'Teléfono',
		rules: [(v) => !!v || 'Campo obligatorio'],
	},
	{
		renderElement: 'textfield',
		type: 'email',
		name: 'email',
		colStart: 1,
		colEnd: 13,
		initialValue: 'jane.doe@example.com',
		variant: 'solo',
		placeholder: 'nombre@dominio.com',
		label: 'Email',
		rules: [
			(v) => !!v || 'Campo obligatorio',
			(v) => checkEmail(v as string) || 'Introduce un correo válido',
		],
	},
];

const selectedFile = ref<File | null>(null);
const onSelectedFile = (event: HTMLInputEvent) => {
	if (!event.target.files) return;
	selectedFile.value = event.target.files[0];
	emit('select', selectedFile.value);
};
</script>

<style scoped></style>
