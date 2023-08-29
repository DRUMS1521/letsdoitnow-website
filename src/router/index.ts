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
				{
					path: "/contact",
					component: () => import('@/components/Web/Contact.vue')
				},
				{
					path: "/portfolio-details",
					component: () => import('@/components/Web/TemplatePortfolio.vue')
				},
				{
					path: "/doitbot",
					component: () => import('@/components/Web/DoitBot.vue')
				},
				{
					path: "/doitbot/chat",
					component: () => import('@/components/Web/ChatBot.vue')
				},
				{
					path: "/blog",
					children: [
						{
							path: "",
							component: () => import('@/components/Blog/Blog.vue')
						},
						{
							path: ":id",
							component: () => import('@/components/Blog/ArticleDetail.vue')
						}
					]
				}
			]
		}
	]
})

export default router
