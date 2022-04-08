import { createApp } from "vue";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/dist/sweetalert2.css";
import router from "./router";
import App from "./components/App.vue";

window.Swal = Swal;
const toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timeProgressBar: true,
});

window.toast = toast;

createApp(App).use(router).mount("#app");

require("./bootstrap");
