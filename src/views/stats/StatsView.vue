<template>
	<ViewHeader title="Estadísticas" />
	<section class="mb-5">
		<CardLayout class="p-5 text-black">
			<div class="max-h-[350px] overflow-y-auto p-5 flex flex-col gap-5 text-justify">
				<strong>Valoración de los datos (generado con inteligencia artificial):</strong>
				<p>
					A continuación se presenta un resumen de los datos obtenidos por la protectora de animales
					en los años 2022 y 2023:
				</p>
				<div ref="gptResponseRef">{{ gptResponse }}</div>
			</div>
		</CardLayout>
	</section>
	<section class="grid grid-cols-2 gap-5">
		<h1 class="text-center text-black font-bold text-2xl">Año anterior</h1>
		<h1 class="text-center text-black font-bold text-2xl">Año actual</h1>
		<h3 class="col-span-2 text-center uppercase text-primary-1 font-bold text-2xl">Adopciones</h3>
		<CardLayout class="p-5 h-[300px]">
			<Line :data="LAST_ADOPTIONS_DATA" :options="OPTIONS" />
		</CardLayout>
		<CardLayout class="p-5 h-[300px]">
			<Line :data="CURRENT_ADOPTIONS_DATA" :options="OPTIONS" />
		</CardLayout>
		<h3 class="col-span-2 text-center uppercase text-primary-1 font-bold text-2xl">
			Solicitudes de adopción
		</h3>
		<CardLayout class="p-5 h-[300px]">
			<Line :data="LAST_APPLICATIONS_DATA" :options="OPTIONS" />
		</CardLayout>
		<CardLayout class="p-5 h-[300px]">
			<Line :data="CURRENT_APPLICATIONS_DATA" :options="OPTIONS" />
		</CardLayout>
		<h3 class="col-span-2 text-center uppercase text-primary-1 font-bold text-2xl">
			Datos generales
		</h3>
		<CardLayout class="p-5 h-[300px]">
			<Pie :data="LAST_GENERAL_DATA" :options="OPTIONS" />
		</CardLayout>
		<CardLayout class="p-5 h-[300px]">
			<Pie :data="CURRENT_GENERAL_DATA" :options="OPTIONS" />
		</CardLayout>
		<h3 class="col-span-2 text-center uppercase text-primary-1 font-bold text-2xl">Organización</h3>
		<CardLayout class="p-5 h-[300px]">
			<Pie :data="LAST_ORGANIZATION_DATA" :options="OPTIONS" />
		</CardLayout>
		<CardLayout class="p-5 h-[300px]">
			<Pie :data="CURRENT_ORGANIZATION_DATA" :options="OPTIONS" />
		</CardLayout>
	</section>
</template>

<script lang="ts" setup>
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	ArcElement,
} from 'chart.js';
import {
	CURRENT_ADOPTIONS_DATA,
	CURRENT_GENERAL_DATA,
	CURRENT_APPLICATIONS_DATA,
	CURRENT_ORGANIZATION_DATA,
	LAST_ADOPTIONS_DATA,
	LAST_GENERAL_DATA,
	LAST_APPLICATIONS_DATA,
	LAST_ORGANIZATION_DATA,
} from './database';

import { Pie, Line } from 'vue-chartjs';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	ArcElement
);

const OPTIONS = {
	responsive: true,
	maintainAspectRatio: false,
};

const gptResponseRef = ref<HTMLDivElement>();

const gptResponse = `
<p>
					En cuanto a las <strong>adopciones</strong>, se registró un incremento del
					<strong class="text-green-500">49%</strong> en el año 2023 en comparación con el año
					anterior. Los meses con mayor número de adopciones en 2022 fueron febrero y junio,
					mientras que en 2023 fueron enero y mayo.
				</p>
				<p>
					En cuanto al personal de la organización, se observa un aumento en el número de
					<strong>paseadores de perros</strong> y una disminución en el número de
					<strong>socializadores</strong> y <strong>voluntarios en eventos de adopción</strong>. Sin
					embargo, el número de <strong>administradores</strong> se mantuvo estable.
				</p>
				<p>
					En relación a las <strong>solicitudes de adopción</strong>, se presentó una disminución
					del <strong class="text-red-500">63%</strong> en febrero de 2023 en comparación con el
					mismo mes del año anterior. En abril de ambos años se registraron el mayor número de
					solicitudes de adopción.
				</p>
				<p>
					En cuanto a los datos generales, se observó un aumento en el número de
					<strong>casas de acogida</strong> y en las <strong>nuevas entradas</strong>, lo cual puede
					indicar un mayor esfuerzo por parte de la organización en la acogida de animales
					necesitados. Sin embargo, también se registró un incremento en el número de
					<strong class="text-red-500">fallecimientos</strong>, lo cual es preocupante y puede
					requerir un análisis más profundo de las posibles causas.
				</p>
				<p>
					En conclusión, se puede destacar el esfuerzo y compromiso de la protectora de animales por
					mejorar la vida de los animales en necesidad, como se refleja en el aumento de las
					adopciones y casas de acogida. Sin embargo, el incremento en los fallecimientos y la
					disminución en el número de solicitudes de adopción pueden indicar la necesidad de revisar
					y mejorar las estrategias de la organización en estos aspectos.
				</p>
				<strong>Resumen de los datos:</strong>
				<ul class="flex flex-col gap-5">
					<li>
						<strong>Adopciones</strong> (2022 a 2023):
						<ul>
							<li>Incremento: <span class="text-green-500">49.5%</span></li>
						</ul>
					</li>
					<li>
						<strong>Casas de acogida</strong> (2022 a 2023):
						<ul>
							<li>Incremento: <span class="text-green-500">17.6%</span></li>
						</ul>
					</li>
					<li>
						<strong>Nuevas entradas</strong> (2022 a 2023):
						<ul>
							<li>Incremento: <span class="text-green-500">900%</span></li>
						</ul>
					</li>
					<li>
						<strong>Fallecimientos</strong> (2022 a 2023):
						<ul>
							<li>Incremento: <span class="text-red-500">150%</span></li>
						</ul>
					</li>
					<li>
						<strong>Administradores</strong> (2022 a 2023):
						<ul>
							<li>Incremento: <span class="text-green-500">100%</span></li>
						</ul>
					</li>
					<li>
						<strong>Paseadores de perros</strong> (2022 a 2023):
						<ul>
							<li>Incremento: <span class="text-green-500">91.7%</span></li>
						</ul>
					</li>
					<li>
						<strong>Socializadores</strong> (2022 a 2023):
						<ul>
							<li>Disminución: <span class="text-red-500">79.3%</span></li>
						</ul>
					</li>
					<li>
						<strong>Voluntarios en eventos de adopción</strong> (2022 a 2023):
						<ul>
							<li>Disminución: <span class="text-red-500">78.1%</span></li>
						</ul>
					</li>
					<li>
						<strong>Recaudadores de fondos</strong> (2022 a 2023):
						<ul>
							<li>Disminución: <span class="text-red-500">25%</span></li>
						</ul>
					</li>
					<li>
						<strong>Solicitudes de adopción</strong> (2022 a 2023):
						<ul>
							<li>Incremento: <span class="text-green-500">19.7%</span></li>
						</ul>
					</li>
				</ul>
				<strong
					>Es importante destacar que la disminución en el número de socializadores y voluntarios en
					eventos de adopción puede ser una preocupación para la organización y se debería
					investigar el motivo detrás de esta disminución. Por otro lado, el aumento del 900% en el
					número de nuevas entradas es un dato alarmante y podría requerir de una revisión en los
					procesos de admisión. Sin embargo, el incremento del 49.5% en las adopciones es una buena
					noticia y refleja el trabajo y esfuerzo de la organización en el año anterior.
					</strong>
				`;

onMounted(() => {
	if (gptResponseRef.value) {
		gptResponseRef.value.innerHTML = gptResponse;
	}
});
</script>
