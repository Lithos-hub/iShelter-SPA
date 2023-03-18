<template>
	<section class="flex justify-between mb-5 items-center">
		<h1 class="text-5xl font-bold text-secondary-1">Mi organización</h1>
		<BaseButton
			title="Añadir nuevo usuario"
			rounded="pill"
			size="large"
			@click="dialog = !dialog" />
		<FullScreenDialog
			:open="dialog"
			title="Añadir nuevo usuario"
			@close="dialog = !dialog">
			<div class="p-5">
				<!-- <FormGenerator :components="componentsList" /> -->
			</div>
		</FullScreenDialog>
	</section>
	<section>
		<DataFilters :is-loading="isLoading" />
	</section>
	<section class="mb-5">
		<HeaderLegends :legends="userRoleLegends" />
	</section>
	<section>
		<base-spinner v-if="isLoading" />
		<section v-else-if="usersData?.data.length" class="grid grid-cols-4 gap-10">
			<ListCard v-for="(user, i) of usersData?.data" :key="i" :data="user" />
		</section>
		<section v-else>
			<NoDataMessage
				message="Aún no has añadido usuarios. 
			Pulsa en 'Añadir nuevo usuario' para empezar a registrar uno." />
		</section>
	</section>
</template>

<script lang="ts" setup>
import DataFilters from './components/DataFilters.vue';
import HeaderLegends from './components/HeaderLegends.vue';
import ListCard from './components/UserCard.vue';

import { useUsersQuery } from '@/services/apis/users';

import { userRoleLegends } from '@/utils';

const { data: usersData, isLoading } = useUsersQuery();

const dialog = ref(false);
</script>
