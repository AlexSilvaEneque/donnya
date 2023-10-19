import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import PrimeVue from 'primevue/config'
import { plugin, defaultConfig } from '@formkit/vue'
import { PDFPlugin } from 'vue3-pdfmake';

import Button from 'primevue/button'
import Menu from 'primevue/menu'
import InputMask from 'primevue/inputmask'
import Password from 'primevue/password'
import InputText from 'primevue/inputtext'
import InputNumber from 'primevue/inputnumber'
import Breadcrumb from 'primevue/breadcrumb'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Dropdown from 'primevue/dropdown'
import Sidebar from 'primevue/sidebar'
import Dialog from 'primevue/dialog'
// import Toast from 'primevue/toast'
import ConfirmDialog from 'primevue/confirmdialog'
import ConfirmationService from 'primevue/confirmationservice'
import Tag from 'primevue/tag'
import Skeleton from 'primevue/skeleton'

import { useToast } from 'vue-toast-notification'


import App from './App.vue'
import router from './router'
import config from '../formkit.config'

import "primevue/resources/themes/lara-light-blue/theme.css"
import '/node_modules/primeflex/primeflex.css'
import 'primeicons/primeicons.css'

import 'vue-toast-notification/dist/theme-sugar.css'

const $toast = useToast({
    position: 'top-right',
    duration: 5000
})

const app = createApp(App)

app.provide('toast', $toast)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(PDFPlugin)
app.use(pinia)
app.use(router)
.use(PrimeVue, { ripple: true })
.use(plugin, defaultConfig(config))
app.use(ConfirmationService)
app.component("Button", Button)
app.component("Menu", Menu)
app.component("InputMask", InputMask)
app.component("Password", Password)
app.component("InputText", InputText)
app.component("Breadcrumb", Breadcrumb)
app.component("DataTable", DataTable)
app.component("Column", Column)
app.component("Dropdown", Dropdown)
app.component("Sidebar", Sidebar)
app.component("Dialog", Dialog)
app.component("ConfirmDialog", ConfirmDialog)
app.component("Tag", Tag)
app.component("Skeleton", Skeleton)
app.component("InputNumber", InputNumber)
// app.component("Toast", Toast)
app.mount('#app')
