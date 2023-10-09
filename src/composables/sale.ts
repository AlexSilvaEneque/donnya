import { inject } from "vue"
import { useRouter } from "vue-router"
import { useCartStore } from "@/stores/cart"
import saleAPI from "@/api/saleAPI"
import type { ISale } from "@/interfaces"

export default function useSale() {

    const router = useRouter()
    const cartStore = useCartStore()
    const toast : any = inject('toast')

    const allSales = async () => {
        const { data } = await saleAPI.allSales()
        return data
    }

    const getSaleById = async (id : string) => {
        try {
            const { data } = await saleAPI.getSaleById(id)
            return data
        } catch (error) {
            
        }
    }

    const registerSale = async (formData : ISale) => {
        const send : ISale = {
            ...formData,
            detailProducts: cartStore.cart
        }
        try {
            const { data } = await saleAPI.registerSale(send)
            toast.open({
                message: data.msg,
                type: 'success'
            })
            router.push({ name: 'index-sale' })
        } catch (error:any) {
            toast.open({
                message: error.response.data.msg,
                type: 'error'
            })
        }
    }

    const updateSale = async (id : string, formData : ISale) => {
        try {
            const { data } = await saleAPI.updateSale(id, formData)
            toast.open({
                message: data.msg,
                type: 'success'
            })
            router.push({ name: 'index-sale' })
        } catch (error:any) {
            toast.open({
                message: error.response.data.msg,
                type: 'error'
            })
        }
    }

    const deleteSale = async (id : string) => {
        try {
            const { data } = await saleAPI.deleteSale(id)
            toast.open({
                message: data.msg,
                type: 'success'
            })
        } catch (error:any) {
            toast.open({
                message: error.response.data.msg,
                type: 'error'
            })
        }
    }

    return {
        allSales,
        getSaleById,
        registerSale,
        updateSale,
        deleteSale
    }
}