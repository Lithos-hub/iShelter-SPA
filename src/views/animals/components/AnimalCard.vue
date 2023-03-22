<template>
	<CardLayout class="hover:scale-105 duration-200" data-testid="ListCard">
		<v-card class="mx-auto rounded-xl" elevation="0">
			<RouterLink :to="`/animals/${data.id}`">
				<v-img
					class="align-end text-white"
					height="350"
					:src="data.image || '/img/no-photo.png'"
					cover>
					<v-card-title class="bg-primary-1 bg-opacity-80 backdrop-blur-sm">
						<div class="flex justify-between font-bold">
							<div>{{ data.name }} <SpecieEmoji :specie="data.specie" /></div>
							<div>{{ age }}</div>
						</div>
					</v-card-title>

					<StatusChip
						class="absolute top-0 right-0 w-full"
						:animal-status="data.status" />
				</v-img>
			</RouterLink>

			<v-card-text class="flex justify-between">
				<div class="flex gap-5 items-center">
					<v-img :src="`/3d/${data.gender.toLowerCase()}.png`" width="50" />
					<div>
						<p class="font-bold text-primary">Llegó el</p>
						{{ formatTime(data.intake_date) }}
					</div>
				</div>
				<v-btn icon color="error">
					<v-icon icon="mdi-delete" />
				</v-btn>
			</v-card-text>
		</v-card>
	</CardLayout>
</template>

<script setup lang="ts">
import { Animal } from '@/models';
import SpecieEmoji from './SpecieEmoji.vue';
import StatusChip from './StatusChip.vue';
import { useDateTransformer } from '@/composables';
import { formatTime } from '../../../utils/timeFormat';

interface Props {
	data: Animal;
}
const props = defineProps<Props>();

const age = useDateTransformer(props.data.date_birth);
</script>
