<template>
	<section class="flex justify-between mb-5 items-center">
		<h1 class="text-5xl font-bold text-secondary-1">
			Detalles de la persona: {{ 'name' }}
		</h1>
		<RouterLink to="/people">
			<BaseButton title="Regresar" rounded="pill" size="large" />
		</RouterLink>
	</section>
</template>
