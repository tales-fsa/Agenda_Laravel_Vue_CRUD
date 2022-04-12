import { createRouter, createWebHistory } from "vue-router";
import contatoIndex from "../components/Contatos/index.vue";
import contatoCreate from "../components/Contatos/create.vue";
import contatoEdit from "../components/Contatos/edit.vue";

const routes = [
    {
        name: "home",
        path: "/",
        component: contatoIndex,
    },
    {
        name: "criarContato",
        path: "/contato/create",
        component: contatoCreate,
    },
    {
        name: "editarContato",
        path: "/contato/edit/:id",
        component: contatoEdit,
    },
    {
        name: "updateContato",
        path: "/contato/update/:id",
        component: contatoEdit,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
