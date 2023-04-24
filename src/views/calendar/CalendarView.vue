<template>
	<section class="flex justify-between mb-5 items-center">
		<h1 class="text-5xl font-bold text-secondary-1">Calendario</h1>
	</section>
	<section class="flex gap-5">
		<!-- <Calendar expanded /> -->
		<div class="grow w-full">
			<DatePicker
				v-model="date"
				expanded
				:attributes="events"
				color="primary" />
		</div>
		<CardLayout class="max-w-[350px]">
			<div class="flex flex-col h-full gap-5">
				<div
					class="bg-secondary-1 rounded-t-xl px-5 py-1 flex justify-between items-center">
					<h2 class="font-bold text-white text-2xl mx-auto">
						{{ date.toLocaleDateString() }}
					</h2>
				</div>
				<section class="px-5 flex flex-col gap-5">
					<div>
						<div class="text-center mx-auto mb-2">
							Tienes
							<strong class="text-primary-1">{{
								selectedDateEvents.length
							}}</strong>
							{{ selectedDateEvents.length === 1 ? 'evento' : 'eventos' }} este
							día
						</div>
						<ul
							v-if="selectedDateEvents.length > 0"
							class="flex flex-col gap-1 h-auto max-h-[300px] p-2 overflow-y-auto border rounded-l-[30px]">
							<li
								v-for="(calendarEvent, i) of selectedDateEvents"
								:key="i"
								:class="`bg-${calendarEvent.dot}-300 border border-${calendarEvent.dot}-500 text-sm font-bold rounded-full hover:scale-105 duration-200 cursor-pointer flex justify-between items-center px-1`">
								<div
									class="w-full h-full p-4"
									@click="onSelectEvent(calendarEvent)">
									{{ calendarEvent.title }}
								</div>
								<v-btn
									icon
									size="small"
									color="red"
									@click="onDeleteCalendarEvent(calendarEvent.id)">
									<v-icon icon="mdi-close" />
								</v-btn>
							</li>
						</ul>
					</div>
				</section>
				<section class="p-5 mt-auto flex flex-col gap-2">
					<FormGenerator :components="componentsList" class="gap-y-0" />
					<strong class="text-sm text-primary-1 text-center"
						>Selecciona un color para el evento:</strong
					>
					<div class="grid grid-cols-8 gap-1 mb-3">
						<div
							v-for="color in pickerColors"
							:key="color"
							:class="`${color} h-7 w-7 rounded-full hover:bg-opacity-50 cursor-pointer border-2  ${
								selectedColor === color
									? 'border-slate-800'
									: 'border-transparent'
							}`"
							@click="onSelectEventColor(color)"></div>
					</div>
					<v-btn block size="40" :class="selectedColor" @click="addEvent">
						<v-icon size="20" color="white" icon="mdi-plus"></v-icon
					></v-btn>
				</section>
			</div>
		</CardLayout>
	</section>
</template>

<script setup lang="ts">
import { DatePicker } from 'v-calendar';

import 'v-calendar/style.css';
import { FormGeneratorInterface } from '../../models/FormGenerator.interface';
import { useFormGeneratorStore } from '@/store';

interface CalendarEvent {
	description: string;
	title: string;
	dot: string;
	dates: Date;
}

const date = ref<Date>(new Date());

const { setVModelForm } = useFormGeneratorStore();

const pickerColors = [
	'bg-gray-500',
	'bg-blue-500',
	'bg-indigo-500',
	'bg-purple-500',
	'bg-pink-500',
	'bg-red-500',
	'bg-orange-500',
	'bg-yellow-500',
	'bg-green-500',
	'bg-teal-500',
	'bg-cyan-500',
	'bg-sky-500',
	'bg-lime-500',
	'bg-amber-500',
	'bg-fuchsia-500',
	'bg-rose-500',
];

const selectedColor = ref(pickerColors.at(0));

const events = ref<CalendarEvent[]>([
	{
		id: 1,
		description: 'lorem ipsum dolor 1',
		title: 'Evento número 1',
		dot: 'fuchsia',
		dates: new Date(1681596000000),
	},
	{
		id: 2,
		description: 'lorem ipsum dolor 2',
		title: 'Evento número 2',
		dot: 'indigo',
		dates: new Date(1681596000000),
	},
	{
		id: 3,
		description: 'lorem ipsum dolor 3',
		title: 'Evento número 3',
		dot: 'lime',
		dates: new Date(1680904800000),
	},
	{
		id: 4,
		description: 'lorem ipsum dolor 4',
		title: 'Evento número 4',
		dot: 'amber',
		dates: new Date(1681250400000),
	},
]);

const componentsList: FormGeneratorInterface[] = ref([
	{
		renderElement: 'textfield',
		name: 'title',
		colStart: 1,
		colEnd: 13,
		initialValue: '',
		variant: 'solo',
		label: 'Título del Evento',
	},
	{
		renderElement: 'textarea',
		name: 'description',
		colStart: 1,
		colEnd: 13,
		initialValue: '',
		variant: 'solo',
		label: 'Descripción',
	},
]);

watch(date, () => {
	setVModelForm({
		title: '',
		description: '',
	});
});

const onSelectEventColor = (color) => (selectedColor.value = color);
const onSelectEvent = ({ title, description }) => {
	setVModelForm({
		title,
		description,
	});
};
const onDeleteCalendarEvent = (id: number) => {
	// TODO:
	// Delete event and refresh
};
const selectedDateEvents = computed(() =>
	events.value.filter(
		({ dates }) =>
			dates.toLocaleDateString() === date.value.toLocaleDateString()
	)
);

const addEvent = () => {
	// TODO
};
</script>
