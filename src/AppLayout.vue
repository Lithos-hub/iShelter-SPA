<template>
	<div>
		<v-layout class="relative">
			<BaseNavbar />
			<SecondaryNavbar />
			<v-main class="min-h-screen bg-slate-100">
				<div class="my-5 mx-[10vw]">
					<router-view />
				</div>
				<ChatDialog v-if="chatIsOpened" @close="toggleChat" />
			</v-main>
			<div
				v-motion
				class="fixed bottom-5 right-5 z-10"
				:initial="{
					opacity: 0,
				}"
				:enter="{
					opacity: 1,
				}">
				<v-btn v-if="!chatIsOpened" color="primary" icon size="60" @click="toggleChat">
					<v-icon size="30" color="white" icon="mdi-message-text"></v-icon
				></v-btn>
			</div>
		</v-layout>
	</div>
</template>

<script lang="ts" setup>
const chatIsOpened = ref(false);
const toggleChat = () => (chatIsOpened.value = !chatIsOpened.value);
</script>
