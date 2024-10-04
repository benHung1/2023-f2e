import LatestEvent from "../components/LatestEvent.vue";
import PolicyIssues from "../components/PolicyIssues.vue";
import Donated from "../components/Donated.vue";
import Mail from "../components/Mail.vue";

import { createMemoryHistory, createRouter } from "vue-router";

const routes = [
  { path: "/latestEvent", component: LatestEvent },
  { path: "/policyIssues", component: PolicyIssues },
  { path: "/donated", component: Donated },
  { path: "/mail", component: Mail },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
