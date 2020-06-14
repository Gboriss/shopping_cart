import axios from 'axios'
// import { response } from 'express'

export default {
    state: {
        products: []
    },

    mutations: {
        UPDATE_PRODUCT(state, payload) {
            state.products = payload
        }
    },

    actions: {
        getProducts(context) {
            axios.get('/api/products').then(response => context.commit('UPDATE_PRODUCT', response.data))
        }
    },

    getters: {
        products: state => state.products
    }
}