// Composables
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		component: () => import('@/AppLayout.vue'),
		children: [
			{
				path: '',
				name: 'Home',
				component: () => import(/* webpackChunkName: "home" */ '@/views/landing/LandingView.vue'),
			},
			{
				path: '/account',
				name: 'Account',
				component: () => import(/* webpackChunkName: "home" */ '@/views/account/AccountView.vue'),
			},
			{
				path: '/organization',
				name: 'Organization',
				component: () =>
					import(/* webpackChunkName: "home" */ '@/views/organization/OrganizationView.vue'),
			},
			{
				path: '/people',
				name: 'People',
				component: () => import(/* webpackChunkName: "home" */ '@/views/people/PeopleView.vue'),
			},
			{
				path: '/people/:id',
				name: 'Person details',
				component: () => import(/* webpackChunkName: "home" */ '@/views/people/DetailsView.vue'),
			},
			{
				path: '/calendar',
				name: 'Calendar',
				component: () => import(/* webpackChunkName: "home" */ '@/views/calendar/CalendarView.vue'),
			},
			{
				path: '/animals',
				name: 'Animals',
				component: () => import(/* webpackChunkName: "home" */ '@/views/animals/AnimalsView.vue'),
			},
			{
				path: '/follow-up',
				name: 'Follow Up',
				component: () =>
					import(/* webpackChunkName: "home" */ '@/views/follow-up/FollowUpView.vue'),
			},
			{
				path: '/animals/:id',
				name: 'Animal details',
				component: () => import(/* webpackChunkName: "home" */ '@/views/animals/DetailsView.vue'),
			},
			{
				path: '/stats',
				name: 'Stats',
				component: () => import(/* webpackChunkName: "home" */ '@/views/stats/StatsView.vue'),
			},
			{
				path: '/applications',
				name: 'Applications',
				component: () =>
					import(/* webpackChunkName: "home" */ '@/views/applications/ApplicationsView.vue'),
			},
			{
				path: '/financial',
				name: 'Financial',
				component: () =>
					import(/* webpackChunkName: "home" */ '@/views/financial/FinancialView.vue'),
			},
		],
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
