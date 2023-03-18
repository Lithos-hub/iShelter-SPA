<template>
	<section class="flex justify-between mb-5 items-center">
		<h1 class="text-5xl font-bold text-secondary-1">Personas</h1>
		<BaseButton
			title="Añadir nueva persona"
			rounded="pill"
			size="large"
			@click="dialog = !dialog" />
		<FullScreenDialog
			:open="dialog"
			title="Añadir nueva persona"
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
		<HeaderLegends :legends="personRoleLegends" />
	</section>
	<section>
		<base-spinner v-if="isLoading" />
		<section
			v-else-if="peopleData?.data.length"
			class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
			<PeopleCard
				v-for="(person, i) of peopleData?.data"
				:key="i"
				:data="person" />
		</section>
		<section v-else>
			<NoDataMessage
				message="Aún no has añadido personas. 
			Pulsa en 'Añadir nueva persona' para empezar a registrar una." />
		</section>
	</section>
</template>

<script lang="ts" setup>
import DataFilters from './components/DataFilters.vue';
import HeaderLegends from './components/HeaderLegends.vue';
import PeopleCard from './components/PeopleCard.vue';

import { usePeopleQuery } from '@/services/apis/people';

import { personRoleLegends } from '@/utils';

const { data: peopleData, isLoading } = usePeopleQuery();

const dialog = ref(false);
</script>
