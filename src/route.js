import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {path: '/'                          ,name:'home'            ,component: () => import("./pages/Home.vue")},
    {path: '/about'                     ,name:'about'           ,component: () => import("./pages/About.vue")},
    {path: '/product'                   ,name:'product'         ,component: () =>import("./pages/Product.vue")},
    {path: '/productDetails/:id/:slug'  ,name:'productDetails'  ,component: () => import("./pages/ProductDetails.vue")},
    {path: '/news'                      ,name:'news'            ,component: () => import("./pages/News.vue")},
    {path: '/eventDetails/:id/:slug'    ,name:'eventDetails'    ,component: () => import("./pages/EventDetails.vue")},
    {path: '/users'                     ,name:'users'           ,component: () => import("./pages/Users.vue")},
    {path: '/qa'                        ,name:'qa'              ,component: () => import("./pages/Qa.vue")},
    {path: '/cart'                      ,name:'cart'            ,component: () => import("./pages/Cart.vue")},
    {path: '/files'                     ,name:'files'           ,component: () => import("./pages/Files.vue")},
    {path: '/stats'                     ,name:'stats'           ,component: () => import("./pages/Stats.vue")},
    {path: '/sign-in'                   ,name:'sign-in'         ,component: () => import("./pages/SignIn.vue")},
    {path: '/sign-up'                   ,name:'sign-up'         ,component: () => import("./pages/SignUp.vue")},
    // 會員認證
    // {path:'/protected',name:'protected',component:() => import("./pages/Protected.vue"), meta:{requiresAuth: true}}
]

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition){
        // when router path changed push view to the top 
        return savedPosition || { top:0 }; 
        // return savedPosition || new Promise((resolve)=>{
        //     setTimeout(()=> resolve({top:0},300))
        // }) 
    }
    
});
// every single time when route changes in the application， this function is fired，in this function can access the meta that we're navigating to,and ckeck to see if the requiresAuth property is defined
router.beforeEach((to, from)=>{
    if(to.meta.requiresAuth && !window.user){
        // need to login if not already logged in
        return {name:'sign-up'}
    }
})