<template>
	<ViewHeader title="Solicitudes" />
	<section class="mb-5">
		<DataFilters :is-loading="isLoading" />
	</section>
	<section class="mb-5">
		<div class="grid grid-cols-7 px-5 gap-10 text-center text-primary-1">
			<div />
			<strong>Estado</strong>
			<strong>Nombre</strong>
			<strong>Email</strong>
			<strong>Teléfono</strong>
			<strong>Marcar como</strong>
			<strong>Acción</strong>
		</div>
	</section>
	<section>
		<ul class="flex flex-col gap-1">
			<li
				v-for="(item, i) of applicationsData?.data as Application[]"
				:key="i"
				class="bg-white shadow-xl px-5 py-5 grid grid-cols-7 gap-10 text-center relative items-center">
				<div />
				<div
					class="rounded-full py-2 flex flex-col items-center justify-center mx-auto px-5"
					:class="getApplicationStatusColor(item.status)">
					{{ getApplicationStatusName(item.status) }}
				</div>
				<div class="flex flex-col gap-2.5">
					<h2>
						{{ item.fullname }}
					</h2>
				</div>
				<div class="flex flex-col gap-2.5">
					<h2>
						{{ item.email }}
					</h2>
				</div>
				<div class="flex flex-col gap-2.5">
					<h2>
						{{ item.phone }}
					</h2>
				</div>

				<v-select
					v-model="item.status"
					clearable
					color="primary"
					label="Estado"
					item-title="text"
					item-value="value"
					hide-details
					:items="statusItems"
					menu-icon="mdi-chevron-down" />

				<div class="flex gap-5 justify-center">
					<v-btn color="white" icon size="40">
						<v-icon size="20" color="primary" icon="mdi-eye"></v-icon
					></v-btn>
					<v-btn color="white" icon size="40">
						<v-icon size="20" color="primary" icon="mdi-delete"></v-icon
					></v-btn>
				</div>
				<CategoryChip :category="item.category" />
			</li>
		</ul>
	</section>
</template>

<script setup lang="ts">
import DataFilters from './components/DataFilters.vue';
import CategoryChip from './components/CategoryChip.vue';

import { useApplicationsQuery } from '@/services/apis/applications';
import { getApplicationStatusColor, getApplicationStatusName } from '@/utils/applications';
import { Application } from '@/models';

const { data: applicationsData, isLoading } = useApplicationsQuery();

const statusItems = [
	{ text: 'Nuevo', value: 'new' },
	{ text: 'Leído', value: 'read' },
	{ text: 'Rechazado', value: 'denied' },
	{ text: 'Importante', value: 'important' },
];
</script>

<style scoped></style>
