<template>
	<section class="mb-5">
		<h1 class="text-5xl font-bold text-secondary-1">Estadísticas</h1>
	</section>
	<section class="mb-5">
		<CardLayout class="p-5 text-black">
			<div class="max-h-[350px] overflow-y-auto p-5 flex flex-col gap-5 text-justify">
				<strong>Resumen y valoración de los datos</strong>
				<p>
					En el año 2022 hubo un total de
					<strong class="text-green-500">327 adopciones</strong>, mientras que en el año 2023 hasta
					el mes de abril se han registrado <strong class="text-green-500">490 adopciones</strong>.
					Estos datos sugieren que la protectora de animales ha tenido un
					<strong class="text-green-500"
						>incremento en el número de adopciones en el año 2023</strong
					>
					en comparación con el año anterior.
				</p>
				<p>
					Podemos observar que en el año 2022, la protectora recibió un total de
					<strong class="text-green-500">1388 solicitudes de adopción</strong>, mientras que en el
					año 2023, hasta el mes de julio (los datos proporcionados), la protectora ha recibido un
					total de
					<strong class="text-red-500">445 solicitudes de adopción.</strong>
					Estos datos sugieren que la protectora ha experimentado una
					<strong class="text-red-500">disminución</strong>
					en el número de solicitudes de adopción en el año 2023 en comparación con el año anterior.
					Es importante destacar que esto puede deberse a factores externos, como la pandemia de
					COVID-19 y sus restricciones, que pueden haber afectado la cantidad de personas que buscan
					adoptar animales.
				</p>
				<p>
					Al comparar los datos del año 2022 con los del año actual (2023), podemos observar que
					<strong
						>ha habido un aumento en el número de adopciones y de animales en casas de
						acogida.</strong
					>
					Sin embargo, también se observa un aumento significativo en el número de nuevas entradas
					de animales y de fallecimientos.
				</p>
				<p>
					En el año 2022, la protectora registró 7 adopciones, mientras que en el año actual se han
					registrado 10. Este aumento puede ser un indicador positivo de que la protectora está
					logrando colocar a más animales en hogares permanentes.
				</p>
				<p>
					Sin embargo,
					<strong
						>es importante tener en cuenta que el aumento en las adopciones no necesariamente se
						traduce en una disminución en el número de animales en la protectora.</strong
					>
					En cuanto a los animales en casas de acogida, en el año 2022 había 17 animales en casas de
					acogida, mientras que en el año actual hay 20.
				</p>
				<p>
					Esto sugiere que la protectora ha aumentado su capacidad de colocar animales en hogares
					temporales y que está trabajando en una estrategia de cuidado de los animales que permite
					una mayor cantidad de animales en casas de acogida. Sin embargo,
					<strong
						>los datos de nuevas entradas de animales y fallecimientos son preocupantes.</strong
					>
					En el año 2022, la protectora registró 8 nuevas entradas de animales y 4 fallecimientos,
					mientras que en el año actual se han registrado 80 nuevas entradas de animales y 10
					fallecimientos. Estos números sugieren que la protectora está recibiendo una mayor
					cantidad de animales y enfrentando mayores desafíos en la atención y cuidado de los
					mismos.
				</p>
			</div>
		</CardLayout>
	</section>
	<section class="grid grid-cols-2 gap-5">
		<h1 class="text-center text-black font-bold text-2xl">Año anterior</h1>
		<h1 class="text-center text-black font-bold text-2xl">Año actual</h1>
		<CardLayout class="p-5 min-h-[300px]">
			<Line :data="LAST_ADOPTIONS_DATA" :options="OPTIONS" />
		</CardLayout>
		<CardLayout class="p-5 min-h-[300px]">
			<Line :data="CURRENT_ADOPTIONS_DATA" :options="OPTIONS" />
		</CardLayout>
		<CardLayout class="p-5 min-h-[300px]">
			<Line :data="LAST_APPLICATIONS_DATA" :options="OPTIONS" />
		</CardLayout>
		<CardLayout class="p-5 min-h-[300px]">
			<Line :data="CURRENT_APPLICATIONS_DATA" :options="OPTIONS" />
		</CardLayout>
		<CardLayout class="p-5 min-h-[300px]">
			<Pie :data="LAST_GENERAL_DATA" :options="OPTIONS" />
		</CardLayout>
		<CardLayout class="p-5 min-h-[300px]">
			<Pie :data="CURRENT_GENERAL_DATA" :options="OPTIONS" />
		</CardLayout>
		<CardLayout class="p-5 min-h-[300px]">
			<Pie :data="LAST_ORGANIZATION_DATA" :options="OPTIONS" />
		</CardLayout>
		<CardLayout class="p-5 min-h-[300px]">
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
</script>
