import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';

import { VueQueryPlugin } from 'vue-query';

import { createPinia } from 'pinia';
const pinia = createPinia();

import '@/scss/index.scss';

// Vuetify

import 'vuetify/styles';
import { ThemeDefinition, createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import '@mdi/font/css/materialdesignicons.css';

const myCustomLightTheme: ThemeDefinition = {
	dark: false,
	colors: {
		primary: '#fc4b6c',
		secondary: '#fb9778',
		black: '#0f172a',
		error: '#ef4444',
	},
};

const vuetify = createVuetify({
	components,
	directives,
	theme: {
		defaultTheme: 'myCustomLightTheme',
		themes: {
			myCustomLightTheme,
		},
	},
});

createApp(App)
	.use(VueQueryPlugin)
	.use(pinia)
	.use(vuetify)
	.use(router)
	.mount('#app');
