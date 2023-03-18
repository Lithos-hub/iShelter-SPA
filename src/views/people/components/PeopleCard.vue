<template>
	<CardLayout class="hover:scale-105 duration-200" data-testid="ListCard">
		<v-card class="mx-auto rounded-xl" max-width="400" elevation="0">
			<v-card-title class="bg-primary-1 bg-opacity-80 text-white">
				<div class="flex justify-between">
					<small>{{ fullName }}</small>
					<small>{{ age }}</small>
				</div>
			</v-card-title>

			<v-card-text class="flex flex-col justify-center relative">
				<div class="absolute top-0 right-0">
					<RoleChip class="" :person-role="data.role" />
				</div>
				<div class="flex gap-5 justify-center text-center pt-10">
					<div>
						<strong class="text-primary-1">Ciudad</strong>
						<small class="block">{{ data.city }}</small>
					</div>
					<div>
						<strong class="text-primary-1">Región</strong>
						<small class="block">{{ data.region }}</small>
					</div>
					<div>
						<strong class="text-primary-1">Teléfono</strong>
						<small class="block">{{ data.phone }}</small>
					</div>
				</div>
			</v-card-text>

			<div class="flex justify-end m-2 gap-2">
				<BaseButton title="Eliminar" variant="outlined" rounded="pill" />
				<BaseButton title="Editar" rounded="pill" />
			</div>
		</v-card>
	</CardLayout>
</template>

<script setup lang="ts">
import { Person } from '@/models';
import { useDateTransformer } from '@/composables';
import RoleChip from './RoleChip.vue';

interface Props {
	data: Person;
}
const props = defineProps<Props>();

const fullName = computed(
	() => `${props.data.person_name} ${props.data.person_lastname}`
);

const age = useDateTransformer(props.data.date_birth);
</script>
