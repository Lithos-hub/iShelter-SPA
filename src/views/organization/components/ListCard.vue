<template>
	<CardLayout class="hover:scale-105 duration-200" data-testid="ListCard">
		<v-card class="mx-auto rounded-xl border" max-width="400" elevation="0">
			<v-img class="align-end text-white" height="225" :src="data.avatar" cover>
				<v-card-title class="bg-primary-1 bg-opacity-80">
					{{ fullName }}
				</v-card-title>
			</v-img>

			<v-card-text class="flex justify-between">
				<div>
					<strong class="text-primary-1">Role</strong>
					<p>{{ data.role }}</p>
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

interface Props {
	data: User;
}
const props = defineProps<Props>();

const fullName = computed(
	() => `${props.data.user_name} ${props.data.user_lastname}`
);
</script>
