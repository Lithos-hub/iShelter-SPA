<template>
	<CardLayout class="hover:scale-105 duration-200" data-testid="ListCard">
		<v-card class="rounded-xl border" max-width="500" elevation="0">
			<RouterLink :to="`/organization/${data.id}`">
				<v-img
					class="align-end"
					width="auto"
					height="250"
					aspect-ratio="1/1"
					cover
					:src="data.avatar || '/img/no-photo.png'">
					<v-card-title
						class="bg-primary-1 bg-opacity-50 backdrop-blur-sm text-white">
						<div class="font-bold">
							{{ fullName }}
						</div>
					</v-card-title>
					<RoleChip
						class="absolute top-0 right-0 w-full"
						:user-role="data.role" />
				</v-img>
			</RouterLink>

			<v-card-text>
				<div class="flex justify-between items-end text-center">
					<div class="text-xl">
						<div class="flex gap-3 items-center text-primary-1 font-bold">
							<v-icon size="22" icon="mdi-at" />
							<small class="text-sm">{{ data.email }}</small>
						</div>
						<div class="flex gap-3 items-center text-black">
							<v-icon size="22" icon="mdi-phone" />
							<small class="text-sm">{{ data.phone_first }}</small>
						</div>
					</div>

					<v-btn icon color="error">
						<v-icon icon="mdi-delete" />
					</v-btn>
				</div>
			</v-card-text>
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
