<template>
	<v-app-bar v-if="width < 1350" density="compact" color="black" flat class="text-white">
		<div class="flex gap-5 mx-auto">
			<v-btn variant="text" icon="mdi-menu" @click="drawer = !drawer"></v-btn>
		</div>
	</v-app-bar>
	<v-navigation-drawer v-if="width > 1350" expand-on-hover rail color="black" class="fixed">
		<v-list>
			<v-list-item
				prepend-avatar="https://this-person-does-not-exist.com/img/avatar-11326f146110d286731a8bc4b9b072f4.jpg"
				title="Jane Doe"
				subtitle="jane.doe@example.com"></v-list-item>
		</v-list>

		<v-divider></v-divider>

		<v-list density="compact" nav>
			<v-list-item
				v-for="({ title, icon, to }, i) of menuItems"
				:key="i"
				:prepend-icon="icon"
				:title="title"
				:value="title"
				:active="currentRoute === to"
				@click="goTo(to)" />
		</v-list>
		<v-list class="absolute bottom-0 w-full">
			<v-list-item
				prepend-icon="mdi-exit-to-app"
				title="Cerrar sesión"
				color="red"
				class="text-red-500"
				@click="logout" />
		</v-list>
	</v-navigation-drawer>
	<v-navigation-drawer v-else v-model="drawer" location="top" class="bg-black h-auto" temporary>
		<ul class="w-[75vw] grid grid-cols-3 mx-auto justify-center items-center py-5 bg-black">
			<NavigationMenu v-for="(item, i) of menuItems" :key="i" class="mx-auto" :menu-item="item" />
		</ul>
	</v-navigation-drawer>
</template>

<script lang="ts" setup>
import { useDisplay } from 'vuetify';
import { useRouter, useRoute } from 'vue-router';

const { width } = useDisplay();

const drawer = ref(false);
const router = useRouter();
const route = useRoute();

const currentRoute = computed(() => route.path);

const menuItems = [
	{
		title: 'Mi cuenta',
		to: '/account',
		icon: 'mdi-cog',
	},
	{
		title: 'Mi organización',
		to: '/organization',
		icon: 'mdi-account-multiple',
	},
	{
		title: 'Personas',
		to: '/people',
		icon: 'mdi-account-outline',
	},
	{
		title: 'Animales',
		to: '/animals',
		icon: 'mdi-paw',
	},
	{
		title: 'Seguimiento',
		to: '/follow-up',
		icon: 'mdi-crop-free',
	},
	{
		title: 'Calendario',
		to: '/calendar',
		icon: 'mdi-calendar',
	},
	{
		title: 'Estadísticas',
		to: '/stats',
		icon: 'mdi-chart-bar',
	},
	{
		title: 'Solicitudes',
		to: '/applications',
		icon: 'mdi-message-alert',
	},
	{
		title: 'Estado financiero',
		to: '/financial',
		icon: 'mdi-currency-eur',
	},
];

const goTo = (to: string) => router.push(to);

const logout = () => console.log('logout');
</script>
