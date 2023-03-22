<template>
	<CardLayout class="hover:scale-105 duration-200" data-testid="ListCard">
		<v-card class="mx-auto rounded-xl" max-width="500" elevation="0">
			<RouterLink :to="`/animals/${data.id}`">
				<v-img
					class="align-end text-white mt-15 mb-5"
					height="150"
					:src="`/img/${data.role}.png`">
				</v-img>
				<RoleChip
					class="absolute top-0 right-0 w-full"
					:person-role="data.role" />
				<v-card-title
					class="bg-primary-1 bg-opacity-80 backdrop-blur-sm text-white">
					<div class="flex justify-between text-sm font-bold">
						<div>{{ fullName }}</div>
						<div>{{ age }}</div>
					</div>
				</v-card-title>
			</RouterLink>

			<v-card-text>
				<div class="flex justify-between items-end text-center">
					<div class="text-xl">
						<div class="flex gap-3 items-center text-primary-1 font-bold">
							<v-icon size="22" icon="mdi-map-marker" />
							<span>{{ data.city }}</span>
						</div>
						<div class="flex gap-3 items-center text-black">
							<v-icon size="22" icon="mdi-phone" />
							<span>{{ data.phone }}</span>
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
