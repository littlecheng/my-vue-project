import Vue from "vue";
import Router from "vue-router";
import main from "@/components/main";
import HelloVue from "@/components/day01/HelloVue";
import displayData from "@/components/day01/displayData";
import container from "@/components/day01/container";
import load from "@/components/day01/load";
import baseLayout from "@/components/day01/baseLayout";
import containerLayout from "@/components/day02/containerLayout";
import icon from "@/components/day02/icon";
import link from "@/components/day02/link";
import form from "@/components/day03/form";
import table from "@/components/day03/table";
import tree from "@/components/day03/tree";
import header from "@/components/day03/header";
import workbench from "@/components/day03/workbench";
import handlercenter from "@/components/day03/handlercenter";
import another from "@/components/day03/another";
import ServiceHall from "@/components/day03/ServiceHall";
import Management from "@/components/day03/Management";
import User from "@/components/day03/User";
import login from "@/components/login/login";
import notfound from '@/components/404';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "main",
      component: main
    },
     {
      path: "/day01/middle/:data",
      name: "HelloVue",
      component: HelloVue
    },
    {
      path: "/day01/displayData",
      name: "displayData",
      component: displayData
    },
    {
      path: "/day01/container",
      name: "container",
      component: container
    },
    {
      path: "/day01/load",
      name: "load",
      component: load
    },
    {
      path: "/day01/baseLayout",
      name: "baseLayout",
      component: baseLayout
    },
    {
      path: "/day02/containerLayout",
      name: "containerLayout",
      component: containerLayout
    },
    {
      path: "/day02/icon",
      name: "icon",
      component: icon
    },
    {
      path: "/day02/link",
      name: "link",
      component: link
    },
    {
        path: "/day03/form",
        name: "form",
        component: form
    },
    {
      path: "/day03/table",
      name: "table",
      component: table
    },
    {
        path: "/day03/tree",
        name: "tree",
        component: tree
    },
    {
        path: "/day03/header",
        name: "header",
        component: header,
        redirect:'/day03/handlercenter'
    },
   {
      path: "/day03/handlercenter",
      name: "handlercenter",
      component: handlercenter
    },
    {
      path: "/day03/workbench",
      name: "workbench",
      component: workbench
    },
    {
      path: "/day03/another",
      name: "another",
      component: another
    },
    {
      path: "/day03/ServiceHall",
      name: "ServiceHall",
      component: ServiceHall
    },
    {
      path: "/day03/Management",
      name: "Management",
      component: Management
    },
    {
      path: "/day03/User",
      name: "User",
      component: User
    },
    {
      path: "/login/login",
      name: "login",
      component: login
    },
    {
      path:'*',
      name: 404,
      component: notfound
    }

  ]
});
