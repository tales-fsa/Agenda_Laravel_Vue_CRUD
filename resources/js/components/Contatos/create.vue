<template>
    <div class="container">
        <div class="mt-5 p-5 jumbotron bg-dark">
            <h1 class="text-center text-light">Criar Contato</h1>
        </div>
        <form @submit.prevent="create">
            <div class="row mt-5">
                <div class="col col-8">
                    <label for="nome">Nome</label>
                    <input
                        type="text"
                        class="form-control"
                        name="nome"
                        id="nome"
                        v-model="form.nome"
                    />
                </div>
                <div class="col col-4">
                    <label for="telefone">Telefone</label>
                    <input
                        type="tel"
                        class="form-control"
                        name="telefone"
                        id="telefone"
                        v-model="form.telefone"
                    />
                </div>
            </div>
            <button class="btn btn-primary mt-4 col-1" @click="saveContato()">
                Salvar
            </button>
        </form>
    </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

let form = ref({
    nome: "",
    telefone: "",
});

const router = useRouter();

const saveContato = () => {
    const formData = new FormData();
    formData.append("nome", form.value.nome);
    formData.append("telefone", form.value.telefone);

    axios
        .post("/api/store/", formData)
        .then((response) => {
            (form.value.nome = ""),
                (form.value.telefone = ""),
                router.push("/"),
                toast.fire({
                    icon: "success",
                    title: "Cadastro realizado com sucesso",
                });
        })
        .catch((error) => {});
};
</script>
