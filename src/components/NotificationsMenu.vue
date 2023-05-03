<template>
	<v-card class="fixed top-10 right-5 z-50" width="400">
		<v-toolbar color="white" class="p-2">
			<v-toolbar-title v-if="!isSearching">Avisos</v-toolbar-title>

			<v-spacer v-if="!isSearching"></v-spacer>

			<v-btn
				v-if="!isSearching"
				variant="text"
				icon="mdi-magnify"
				@click="isSearching = !isSearching" />

			<v-text-field
				v-else
				v-model="searchQuery"
				v-motion
				placeholder="Buscar"
				class="max-w-[320px] mt-10 mx-auto"
				variant="solo"
				append-inner-icon="mdi-close"
				:initial="{
					opacity: 0,
				}"
				:enter="{
					opacity: 1,
					transition: {
						type: 'spring',
						stiffness: 250,
						damping: 100,
						mass: 5,
					},
				}"
				@click:append-inner="isSearching = !isSearching" />
		</v-toolbar>

		<div class="max-h-[50vh] overflow-y-auto">
			<v-list density="compact" :items="items" item-props lines="two" nav />
		</div>
	</v-card>
</template>

<script setup lang="ts">
const items = ref([
	{
		prependAvatar: '/img/potential_adopter.png',
		subtitle: 'Nueva solicitud de adopción',
		value: 1299042,
	},
	{ type: 'divider', inset: true },
	{
		prependAvatar: '/img/potential_adopter.png',
		subtitle: 'Nueva solicitud de adopción',
		value: 1299041,
	},
	{ type: 'divider', inset: true },
	{
		prependAvatar: '/img/adopter.png',
		subtitle: 'Un potencial adoptante ha superado el test de adopción',
		value: 1299040,
	},
	{ type: 'divider', inset: true },
	{
		prependAvatar: '/img/foster.png',
		subtitle: 'Nueva solicitud de registro de casa de acogida',
		value: 1299043,
	},
	{ type: 'divider', inset: true },
	{
		prependAvatar: '/3d/volunteer.png',
		subtitle: 'Nueva solicitud de voluntariado',
		value: 1299044,
	},
	{ type: 'divider', inset: true },
	{
		prependAvatar: '/3d/volunteer.png',
		subtitle: 'Nueva solicitud de voluntariado',
		value: 1299045,
	},
	{ type: 'divider', inset: true },
	{
		prependAvatar: '/3d/volunteer.png',
		subtitle: 'Nueva solicitud de voluntariado',
		value: 1299046,
	},
	{ type: 'divider', inset: true },
	{
		prependAvatar: '/3d/volunteer.png',
		subtitle: 'Nueva solicitud de voluntariado',
		value: 1299047,
	},
	{ type: 'divider', inset: true },
]);
const isSearching = ref(false);
const searchQuery = ref('');
</script>
