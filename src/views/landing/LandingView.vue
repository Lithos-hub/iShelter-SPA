<template>
	<div class="flex flex-col gap-5">
		<div class="grid grid-cols-2 gap-5">
			<CardLayout>
				<v-card class="rounded-xl pa-5" elevation="0">
					<v-card-title>
						<h1 class="text-5xl">{{ `Hola, ${user.name}! 😃` }}</h1>
					</v-card-title>
					<v-card-text class="mt-5">
						<strong class="block">Tienes avisos importantes! 🔔 </strong>
						<v-btn class="text-none mt-5" color="primary">Ver avisos</v-btn>
					</v-card-text>
				</v-card>
			</CardLayout>
			<CardLayout>
				<v-card class="rounded-xl pa-5" title="Próximos eventos" elevation="0">
					<v-card-text> Calendario </v-card-text>
				</v-card>
			</CardLayout>
		</div>
		<div class="flex justify-center">
			<CardLayout>
				<v-btn-toggle
					v-model="filter"
					rounded="0"
					color="primary"
					group
					class="rounded-xl">
					<v-btn class="text-none" value="month"> Mes actual </v-btn>
					<v-btn class="text-none" value="anual"> Año actual </v-btn>
					<v-btn class="text-none" value="forever"> Desde siempre </v-btn>
				</v-btn-toggle>
			</CardLayout>
		</div>
		<div class="grid grid-cols-4 grow gap-10">
			<LandingCard color="text-purple-500" title="Nuevos animales" :value="8" />
			<LandingCard color="text-green-500" title="Adopciones" :value="38" />
			<LandingCard color="text-blue-500" title="Casas de acogida" :value="16" />
			<LandingCard color="text-red-500" title="Fallecidos" :value="3" />
		</div>
	</div>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/store/User.js';
import LandingCard from '@/views/landing/components/LandingCard.vue';

import { ref } from 'vue';

const { user } = useUserStore();

const filter = ref('month');
</script>
