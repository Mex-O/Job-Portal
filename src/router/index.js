import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import JobDetails from "../views/JobDetails.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/JobDetails/:jobPosition",
    name: "jobDetails",
    component: JobDetails,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    // always scroll to top
    return {
      top: 0,
      behavior: "smooth",
    };
  },
});

export default router;
