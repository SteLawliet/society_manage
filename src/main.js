// 导入核心插件
import Vue from "vue";
import VueRouter from "vue-router";
import Axios from "axios";
import bootstrap from 'bootstrap'
import './statics/css/bootstrap.css'
import './statics/css/custum.css'
import Moment from "moment"
import Home from "./components/home/Home.vue"//导入vue组件
import App from "./components/home/app.vue"
import NavBar from "./components/nav/NavBar.vue"
import NavSide from "./components/nav/NavSide.vue"
import Login from "./components/login/Login.vue"
import Society from "./components/home/Society.vue"
import User from "./components/home/User.vue"
import Activity from "./components/home/Activity.vue"
import Member from "./components/home/Member.vue"
import addSociety from "./components/apply/addSociety.vue"
import addMember from  "./components/apply/addMember.vue"
import addActivity from './components/apply/addActivity.vue'
import Register from  "./components/login/Register.vue"
import ReSociety from  './components/update/reSociety.vue'
import ReUser from './components/update/reUser.vue'
import LoginCom from './components/login/LoginCom.vue'
import VeeValidate from 'vee-validate';
// let bootstrap = require("bootstrap");
// css
// import 'bootstrap/dist/css/bootstrap.css';
// import jquery from "jquery"
// global.jQuery = jquery;



//导入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(VeeValidate);

//注册全局组件
Vue.component("navbar", NavBar);
Vue.component("navside", NavSide);
Vue.component("home", Home);
Vue.component("login", Login);
Vue.component("user", User);
Vue.component("society", Society);
Vue.component("activity", Activity);
Vue.component("member", Member);

// 路由配置
Vue.use(VueRouter);
const router = new VueRouter({
    linkActiveClass: "active",
    routes: [{
            path: "/",
            component: Home
        }, {
            path: "/home",
            component: Home
        },
        {
            name: "user",
            path: "/user",
            component: User

        },
        {
            name: "society",
            path: "/society",
            component: Society
        },
        {
            name: "member",
            path: "/member",
            component: Member
        },
        {
            name: "activity",
            path: "/activity",
            component: Activity
        },
        {
            name:"addsociety",
            path:"/addsociety",
            component:addSociety
        },
        {
            name:"addmember",
            path:"/addmember",
            component:addMember

        },{
        name:"register",
            path:"/register",
            component:Register
        },{
            name:"reuser",
            path:"/reuser",
            component:ReUser
        },{
            name:"resociety",
            path:"/resociety",
            component:ReSociety
        },{
            name:"addactivity",
            path:"/addactivity",
            component:addActivity
        },
        {
            name:"logincom",
            path:'./logincom',
            component:LoginCom
        }



    ]
});


//vue 过滤器
Vue.filter('convertDate', function(value) {
    return Moment(value).format('YYYY-MM-DD');
});

import find from './statics/js/find.js'
import Session from  "./statics/js/SessionStorage.js"

Vue.prototype.findSoc = find;
Vue.prototype.$storage =Session;
//axios异步请求
Vue.prototype.$http = Axios;
// Axios.defaults.BaseUrl = "127.0.0.1:7070/";

//vue主实例
new Vue({
    el: "#app",
    router,
    render: c => c(App)
});