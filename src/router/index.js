import Vue from 'vue'
import Router from 'vue-router'
/* 张春明 */
import Index from '../views/index.vue'
import category from '../views/category.vue'
import detail from '../views/detail.vue'
import products from '../views/products.vue'
import search from '../views/search.vue'
import notFound from '../views/notFound.vue'
/* 发哥 */
import car from "../components/car.vue"
import book from "../components/book.vue"
// import login from "../components/denglu/login.vue"
/* 郭灵丹 */
import Cartempty from "../components/Cartempty.vue"
import Cart from "../components/Cart.vue"
import CartEdit from "../components/CartEdit.vue"
import OrderSub from "../components/OrderSub.vue"
import AddCity from "../components/AddCity.vue"
import Pay from "../components/Pay.vue"
import Dftaddress from "../components/Dftaddress.vue"
/* 王念 */
import Synthesize from "@/components/Synthesize.vue"
import Register from "@/components/Register.vue"
import Login from "@/components/Login.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {path:"/Login",component:Login},
    {path:"/Register",component:Register},
    {path:"/Synthesize",component:Synthesize},
    
    {path:"/Dftaddress",component:Dftaddress},
    {path:"/Pay",component:Pay},
    {path:"/AddCity",component:AddCity},
    {path:"/OrderSub",component:OrderSub},
    {path:"/CartEdit",component:CartEdit},
    {path:"/Cart",component:Cart},
    {path:"/Cartempty",component:Cartempty},

    {path: '/car',name: 'car',component: car},
    {path: '/book',name: 'book',component: book},
    // {path: '/login',name: 'login',component: login},
    {path:'/search',component:search},
    {path:'/products/:kw',component:products,props:true},
    {path:'/detail',component:detail},
    {path:'/category',component:category},
    {path:'*',component:notFound},
    {path:'/index',component:Index},
    {path: '/',component:Index}
  ]
})
