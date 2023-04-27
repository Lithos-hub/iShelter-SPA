<template>
	<v-app-bar density="compact" color="primary" flat class="text-white px-10">
		<router-link
			to="/"
			class="w-auto relative flex px-4 py-1 bg-white rounded-full hover:scale-105 duration-200">
			<v-img src="/logo-v2.png" height="30" width="30" cover aspect-ratio="1/1" />
			<div class="flex flex-col pl-2">
				<small class="text-primary-1">iShelter</small>
				<small class="text-[10px] text-black">Beta</small>
			</div>
		</router-link>

		<v-spacer></v-spacer>

		<v-btn icon>
			<v-icon>mdi-message</v-icon>
		</v-btn>

		<v-btn icon>
			<v-icon>mdi-bell</v-icon>
		</v-btn>

		<avatar-menu />
	</v-app-bar>
</template>
