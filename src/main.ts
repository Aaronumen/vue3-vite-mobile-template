import { createApp } from "vue"
import "./style.less"
import "vant/es/toast/style"
// Dialog
import "vant/es/dialog/style"
// Notify
import "vant/es/notify/style"
// ImagePreview
import "vant/es/image-preview/style"
import App from "./App.vue"
import router from "@/router"
createApp(App).use(router).mount("#app")
