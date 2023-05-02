<template>
	<v-card class="fixed top-10 right-0 z-50" width="350">
		<v-toolbar color="white">
			<v-toolbar-title>Avisos</v-toolbar-title>

			<v-spacer></v-spacer>

			<v-btn variant="text" icon="mdi-magnify"></v-btn>
		</v-toolbar>

		<v-list density="compact" :items="items" item-props lines="two" nav />
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
</script>
