<template>
	<div class="flex flex-col gap-10">
		<div class="grid grid-cols-2 gap-5">
			<CardLayout>
				<div class="pa-5">
					<h3 class="text-5xl">{{ `Hola, ${user.name}! 😃` }}</h3>

					<div class="mt-5">
						<strong class="block">Tienes avisos importantes! 🔔 </strong>
						<v-btn class="text-none mt-5" color="primary">Ver avisos</v-btn>
					</div>
				</div>
			</CardLayout>
			<CardLayout>
				<div class="pa-5">
					<h3 class="text-2xl">Próximos eventos</h3>
					<v-card-text> Calendario </v-card-text>
				</div>
			</CardLayout>
		</div>
		<div class="flex flex-col gap-2">
			<h1 class="text-center text-3xl font-bold text-primary-1">Resumen</h1>
			<div class="flex justify-center mx-auto">
				<CardLayout>
					<v-btn-toggle v-model="filter" rounded="0" color="primary" group class="rounded-xl">
						<v-btn class="text-none" value="month"> Mes actual </v-btn>
						<v-btn class="text-none" value="anual"> Año actual </v-btn>
						<v-btn class="text-none" value="forever"> Desde siempre </v-btn>
					</v-btn-toggle>
				</CardLayout>
			</div>
		</div>
		<div class="grid grid-cols-2 lg:grid-cols-4 grow gap-10 mt-10">
			<LandingCard color="text-blue-500" card-name="new" title="Nuevos animales" :value="8" />
			<LandingCard color="text-amber-500" card-name="adopted" title="Adopciones" :value="38" />
			<LandingCard
				color="text-orange-500"
				card-name="housed"
				title="Casas de acogida"
				:value="16" />
			<LandingCard color="text-slate-500" card-name="dead" title="Fallecidos" :value="3" />
		</div>
	</div>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/store';
import LandingCard from '@/views/landing/components/LandingCard.vue';

import { ref } from 'vue';

const { user } = useUserStore();

const filter = ref('month');
</script>
