import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{ 
			path: "/",
			component: () => import('@/views/WebView.vue'),
			children: [
				{
					path: "",
					component: () => import('@/components/Web/Home.vue')
				},
				{
					path: "/about",
					component: () => import('@/components/Web/About.vue')
				},
				{
					path: "/services",
					component: () => import('@/components/Web/Services.vue')
				},
				{
					path: "/portfolio",
					component: () => import('@/components/Web/Portfolio.vue')
				},
				{
					path: "/careers",
					component: () => import('@/components/Web/Careers.vue')
				},
			]
		},
		{
			path: "/blog",
			component: () => import('@/components/Blog/Blog.vue')
		}
	]
})

export default router
