<template>
	<CardLayout class="hover:scale-105 duration-200" data-testid="ListCard">
		<v-card class="mx-auto rounded-xl border" max-width="400" elevation="0">
			<v-img
				class="align-end text-white"
				height="250"
				:src="data.avatar || '/img/no-photo.png'"
				cover>
				<v-card-title class="bg-primary-1 bg-opacity-80">
					{{ fullName }}
				</v-card-title>
				<RoleChip
					class="absolute top-0 right-0 w-[100px]"
					:user-role="data.role" />
			</v-img>

			<v-card-text class="flex justify-between">
				<div class="flex gap-5 justify-center text-center w-full">
					<div>
						<strong class="text-primary-1">Email</strong>
						<small class="block">{{ data.email }}</small>
					</div>
					<div>
						<strong class="text-primary-1">Teléfono</strong>
						<small class="block">{{ data.phone_first }}</small>
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
import { User } from '@/models';
import RoleChip from './RoleChip.vue';

interface Props {
	data: User;
}
const props = defineProps<Props>();

const fullName = computed(
	() => `${props.data.user_name} ${props.data.user_lastname}`
);
</script>
