import { createRouter, createWebHistory } from "vue-router";
import contatoIndex from "../components/Contatos/index.vue";
import contatoCreate from "../components/Contatos/create.vue";
import contatoEdit from "../components/Contatos/edit.vue";

const routes = [
    {
        path: "/",
        component: contatoIndex,
    },
    {
        path: "/contato/create",
        component: contatoCreate,
    },
    {
        path: "/contato/edit/:id",
        component: contatoEdit,
        props: true,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
