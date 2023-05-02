<template>
	<ViewHeader title="Personas" button-text="Añadir nueva persona" @action="dialog = !dialog" />
	<FullScreenDialog :open="dialog" title="Añadir nueva persona" @close="dialog = !dialog">
		<div class="p-5">
			<!-- <FormGenerator :components="componentsList" /> -->
		</div>
	</FullScreenDialog>
	<section class="mb-5">
		<DataFilters :is-loading="isLoading" />
	</section>
	<section>
		<base-spinner v-if="isLoading" />
		<section
			v-else-if="peopleData?.data.length"
			class="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10">
			<PeopleCard v-for="(person, i) of peopleData?.data" :key="i" :data="person" />
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
import PeopleCard from './components/PeopleCard.vue';

import { usePeopleQuery } from '@/services/apis/people';

const { data: peopleData, isLoading } = usePeopleQuery();

const dialog = ref(false);
</script>
