<template>
    <div class="container">
        <div class="mt-5 p-5 jumbotron bg-dark">
            <h1 class="text-center text-light">Agenda</h1>
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Telefone</th>
                    <th scope="col">Ações</th>
                </tr>
            </thead>
            <tbody v-if="contatos.length > 0">
                <tr v-for="contato in contatos" :key="contato.id">
                    <th>{{ contato.id }}</th>
                    <td>{{ contato.nome }}</td>
                    <td>{{ contato.telefone }}</td>
                    <td>
                        <router-link
                            :to="{
                                name: 'editarContato',
                                params: { id: contato.id },
                            }"
                            class="btn btn-primary mx-1 px-3"
                            ><i class="fas fa-check"></i
                        ></router-link>
                        <form @submit.prevent="create" style="display: inline">
                            <button
                                type="submit"
                                class="btn btn-danger mx-1 px-3"
                                @click="deleteContato(contato.id)"
                            >
                                <i class="far fa-trash-alt"></i>
                            </button>
                        </form>
                    </td>
                </tr>
            </tbody>
            <tbody v-else>
                <tr>
                    <td colspan="4" align="center">
                        Não há contatos cadastrados
                    </td>
                </tr>
            </tbody>
        </table>
        <div>
            <router-link
                :to="{ name: 'criarContato' }"
                class="btn btn-success col-1"
            >
                Novo
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    name: "contatos",
    data() {
        return {
            contatos: [],
        };
    },
    mounted() {
        this.getContatos();
    },
    methods: {
        async getContatos() {
            await axios
                .get("/api/index")
                .then((response) => {
                    this.contatos = response.data.contatos;
                })
                .catch((error) => {
                    console.log(error);
                    this.contatos = [];
                });
        },
        deleteContato(id) {
            Swal.fire({
                title: "Gostaria de apagar o contato ?",
                text: "O registro será apagado definitivamnete",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonText: "Cancelar",
                confirmButtonText: "Apagar",
            }).then((result) => {
                if (result.value) {
                    axios
                        .get(`/api/delete/${id}`)
                        .then(() => {
                            Swal.fire(
                                "Delete",
                                "Contato deletado com sucesso",
                                "success"
                            );
                            this.getContatos();
                        })
                        .catch(() => {
                            Swal.fire(
                                "Falha !",
                                "Algo aconteceu de errado.",
                                "Aviso"
                            );
                        });
                }
            });
        },
    },
};
</script>
