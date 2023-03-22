<template>
	<section class="flex justify-between mb-5 items-center">
		<h1 class="text-5xl font-bold text-secondary-1">Mi organización</h1>
		<BaseButton
			title="Añadir nuevo usuario"
			rounded="pill"
			size="large"
			@click="dialog = !dialog" />
		<FullScreenDialog
			:open="dialog"
			title="Añadir nuevo usuario"
			@close="dialog = !dialog"
			@submit="submitForm">
			<div class="p-5 px-[15vw]">
				<FormGenerator :components="componentsList" />
			</div>
		</FullScreenDialog>
	</section>
	<section class="mb-5">
		<DataFilters :is-loading="isLoading" />
	</section>
	<section>
		<base-spinner v-if="isLoading" />
		<section
			v-else-if="usersData?.data.length"
			class="flex flex-col md:grid md:grid-cols-2 2xl:grid-cols-3 gap-10">
			<ListCard v-for="(user, i) of usersData?.data" :key="i" :data="user" />
		</section>
		<section v-else>
			<NoDataMessage
				message="Aún no has añadido usuarios. 
			Pulsa en 'Añadir nuevo usuario' para empezar a registrar uno." />
		</section>
	</section>
</template>

<script lang="ts" setup>
import DataFilters from './components/DataFilters.vue';
import ListCard from './components/UserCard.vue';

import { FormGeneratorInterface } from '@/models';

import { useUsersQuery } from '@/services/apis/users';

import { getUserRoleList } from '@/utils';
import { checkEmail } from '@/utils/expReg';

import { useFormGeneratorStore } from '@/store';
import { useSnackbarStore } from '@/store';

const { data: usersData, isLoading } = useUsersQuery();
const { vModelForm } = storeToRefs(useFormGeneratorStore());
const { validateForm } = useFormGeneratorStore();
const { showSnackbar } = useSnackbarStore();

const roleItems = computed(() => getUserRoleList());

const dialog = ref(false);

const componentsList: FormGeneratorInterface[] = [
	{
		renderElement: 'textfield',
		name: 'user_name',
		colStart: 1,
		colEnd: 5,
		initialValue: '',
		variant: 'solo',
		label: 'Nombre',
		rules: [(v) => !!v || 'Campo obligatorio'],
	},
	{
		renderElement: 'textfield',
		name: 'user_lastname',
		colStart: 5,
		colEnd: 9,
		initialValue: '',
		variant: 'solo',
		label: 'Apellidos',
		rules: [(v) => !!v || 'Campo obligatorio'],
	},
	{
		renderElement: 'textfield',
		type: 'email',
		name: 'email',
		colStart: 9,
		colEnd: 13,
		initialValue: '',
		variant: 'solo',
		placeholder: 'nombre@dominio.com',
		label: 'Email',
		rules: [
			(v) => !!v || 'Campo obligatorio',
			(v) => checkEmail(v as string) || 'Introduce un correo válido',
		],
	},
	{
		renderElement: 'textfield',
		type: 'tel',
		name: 'phone_first',
		colStart: 1,
		colEnd: 5,
		initialValue: '',
		variant: 'solo',
		placeholder: '000 00 00 00',
		label: 'Teléfono principal',
		rules: [(v) => !!v || 'Campo obligatorio'],
	},
	{
		renderElement: 'textfield',
		type: 'tel',
		name: 'phone_second',
		colStart: 5,
		colEnd: 9,
		initialValue: '',
		variant: 'solo',
		placeholder: '000 00 00 00',
		label: 'Teléfono secundario',
	},
	{
		renderElement: 'select',
		type: 'tel',
		name: 'role',
		colStart: 9,
		colEnd: 13,
		initialValue: undefined,
		variant: 'solo',
		label: 'Rol del usuario',
		rules: [(v) => !!v || 'Campo obligatorio'],
		items: roleItems.value,
	},
	{
		renderElement: 'dragdropinput',
		name: 'avatar',
		colStart: 1,
		colEnd: 13,
		initialValue: undefined,
		label: 'Imagen de usuario',
	},
];

const submitForm = () => {
	const isValid = validateForm();

	if (!isValid) {
		showSnackbar(
			'error',
			'Alguno de los campos no son correctos. Revisa el formulario y vuelve a intentarlo.'
		);
		return;
	}

	console.log('Creando usuario', vModelForm.value);
};
</script>
