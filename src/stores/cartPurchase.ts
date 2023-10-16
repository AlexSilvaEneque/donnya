import { ref, watchEffect } from "vue"
import { defineStore } from "pinia"
import type { ICartPurchase, IProduct } from "@/interfaces"

export const useCartPurchaseStore = defineStore('cartPurchase', () => {

    const productSelected = ref<IProduct | null>()
    const cart = ref<ICartPurchase[]>([])
    const subtotal = ref<number>(0)
    const total = ref<number>(0)

    function addCartPurchase(params: ICartPurchase) {
        const exists = cart.value.findIndex((item) => item.products === params.products)
        if (exists >= 0) {
            alert('Ya está agregado')
            return
        }
        cart.value.push(params)
    }

    function deleteItem(param : ICartPurchase) {
        cart.value = cart.value.filter(item => item.products !== param.products)
    }

    function $reset() {
        productSelected.value = null
    }

    function $resetAll() {
        productSelected.value = null
        cart.value = []
        subtotal.value = 0
        total.value = 0
    }

    watchEffect(() => {
        subtotal.value = cart.value.reduce((total, item) => total + (item.price * item.quantity), 0)
        total.value = subtotal.value
    })
    return {
        productSelected,
        total,
        cart,
        addCartPurchase,
        deleteItem,
        $reset,
        $resetAll
    }
})