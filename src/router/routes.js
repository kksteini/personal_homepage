
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/Index.vue') },
      { path: 'rim', component: () => import('pages/Rhymes.vue') },
      { path: 'poems', component: () => import('pages/Poems.vue') },
      { path: 'anagram', component: () => import('pages/Anagrams.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
