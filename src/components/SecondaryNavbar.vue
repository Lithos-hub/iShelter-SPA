<template>
	<v-app-bar density="compact" color="black" flat class="text-white">
		<div v-if="width > 1350" class="flex gap-5 mx-auto">
			<NavigationMenu
				v-for="(item, i) of menuItems"
				:key="i"
				:menu-item="item" />
		</div>
		<div v-else class="flex gap-5 mx-auto">
			<v-btn variant="text" icon="mdi-menu" @click="drawer = !drawer"></v-btn>
		</div>
	</v-app-bar>
	<v-navigation-drawer
		v-if="width < 1350"
		v-model="drawer"
		location="top"
		class="bg-black h-auto"
		temporary>
		<ul
			class="w-[75vw] grid grid-cols-3 mx-auto justify-center items-center py-5 bg-black">
			<NavigationMenu
				v-for="(item, i) of menuItems"
				:key="i"
				:menu-item="item" />
		</ul>
	</v-navigation-drawer>
</template>

<script lang="ts" setup>
import { useDisplay } from 'vuetify';

const { width } = useDisplay();

const drawer = ref(false);

const menuItems = [
	{
		title: 'Mi organización',
		to: '/organization',
	},
	{
		title: 'Personas',
		to: '/people',
	},
	{
		title: 'Animales',
		to: '/animals',
	},
	{
		title: 'Calendario',
		to: '/calendar',
	},
	{
		title: 'Estadísticas',
		to: '/stats',
	},
	{
		title: 'Solicitudes',
		to: '/applications',
	},
	{
		title: 'Estado financiero',
		to: '/financial',
	},
];
</script>
