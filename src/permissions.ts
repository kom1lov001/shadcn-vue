import router from './router'
import type { RouteLocationNormalized } from 'vue-router'
import {} from './stores'
import { i18n } from '@/i18n'

const whiteList = ['/login']
const title = 'Defender'
const getPageTitle = (key: string) => {
  const { t, te } = i18n.global as any
  const hasKey = te(`app.${key}`) as any
  if (hasKey) {
    const pageName = t(`app.${key}`)

    return `${pageName} - ${title}`
  }
  return title
}

router.beforeEach(async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: any) => {
  console.log('from', from)
  console.log('to', to)
  // if(){}
})

router.afterEach((to: RouteLocationNormalized) => {
  //   NProgress.done()
  document.title = getPageTitle((to.name || '') as string)
})
