<template>
	<section class="flex justify-between mb-5 items-center">
		<h1 class="text-5xl font-bold text-secondary-1">Mi organización</h1>
		<BaseButton
			title="Añadir nuevo animal"
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
	<section>
		<base-spinner v-if="isLoading" />
		<section v-else class="grid grid-cols-4 gap-10">
			<ListCard v-for="(user, i) of usersData?.data" :key="i" :data="user" />
		</section>
	</section>
</template>

<script lang="ts" setup>
import { useUsersQuery } from '../../services/apis/users';
import DataFilters from './components/DataFilters.vue';
import ListCard from './components/ListCard.vue';

const { data: usersData, isLoading } = useUsersQuery();

const dialog = ref(false);
</script>
