import { createApp } from "vue"
import "./style.less"
import "vant/es/toast/style"
// Dialog
import "vant/es/dialog/style"
// Notify
import "vant/es/notify/style"
// ImagePreview
import "vant/es/image-preview/style"
// main.ts
import "virtual:uno.css"
import App from "./App.vue"
import router from "@/router"
createApp(App).use(createPinia()).use(router).mount("#app")
