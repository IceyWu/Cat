import { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'

export const router = createRouter({
	history: createWebHistory(),
  routes,
})

export default (app: App) => app.use(router)
