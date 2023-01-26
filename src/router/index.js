import Vue from "vue"
import VueRouter from "vue-router"
import ListEmployee from "../views/ListEmployee.vue"
import Employee_edit from "../views/Employee/employee-edit.vue"
import Employee_create from "../views/Employee/employee-create.vue"
import Dashboard from "../views/Dashboard.vue"
import Projects from "../views/Projects.vue"
import Login from "../views/Login.vue"
import Onebinar from "../views/Onebinar.vue"
import Vuex from "../views/Vuex.vue"
import Company from "../views/Company.vue"
import Media from "../views/Media.vue"
//import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/onebinar",
    name: "Onebinar",
    component: Onebinar,
  },
  {
    path: "/listEmployee",
    name: "ListEmployee",
    component: ListEmployee,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/company",
    name: "Company",
    component: Company,
  },
  {
    path: "/manage/editemployee",
    name: "Employee_edit",
    component: Employee_edit,
  },
  {
    path: "/manage/createemployee",
    name: "Employee_create",
    component: Employee_create,
  },
  {
    path: "/vuex",
    name: "Vuex",
    component: Vuex,
  },
  {
    path: "/media",
    name: "Media",
    component: Media,
  },
  //{
  //  path: '/about',
  //  name: 'About',
  //  // route level code-splitting
  //  // this generates a separate chunk (about.[hash].js) for this route
  //  // which is lazy-loaded when the route is visited.
  //  component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  //}
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
