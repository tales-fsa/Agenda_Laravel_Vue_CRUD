<template>
    <div class="container">
        <div class="mt-5 p-5 jumbotron bg-dark">
            <h1 class="text-center text-light">Criar Contato</h1>
        </div>
        <form @submit.prevent="criarContato">
            <div class="row mt-5">
                <div class="col col-8">
                    <label for="nome">Nome</label>
                    <input
                        type="text"
                        class="form-control"
                        name="nome"
                        id="nome"
                        v-model="contato.nome"
                    />
                </div>
                <div class="col col-4">
                    <label for="telefone">Telefone</label>
                    <input
                        type="tel"
                        class="form-control"
                        name="telefone"
                        id="telefone"
                        v-model="contato.telefone"
                    />
                </div>
            </div>
            <button class="btn btn-primary mt-4 col-1">Salvar</button>
        </form>
    </div>
</template>
<script>
export default {
    name: "criar-contato",
    data() {
        return {
            contato: {
                nome: "",
                telefone: "",
            },
        };
    },
    methods: {
        async criarContato() {
            await axios
                .post("/api/store/", this.contato)
                .then((response) => {
                    this.$router.push({ name: "home" }),
                        toast.fire({
                            icon: "success",
                            title: "Cadastro realizado com sucesso",
                        });
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
};
</script>
