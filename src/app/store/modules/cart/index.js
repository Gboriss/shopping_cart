import axios from 'axios'
// import { response } from 'express'

export default {
    state: {
        items: []
    },

    mutations: {
        UPDATE_CART(state, payload) {
            state.items = payload
        }
    },

    actions: {
        getCartItems(context) {
            axios.get('/api/cart').then(response => context.commit('UPDATE_CART', response.data))
        },

        addCartItem(context, item) {
            axios.post('/api/cart', item).then(response => context.commit('UPDATE_CART', response.data))
        },

        removeartItem(context, item) {
            axios.post('/api/cart/delete', item).then(response => context.commit('UPDATE_CART', response.data))
        },

        removeAll(context) {
            axios.post('/api/cart/delete/all').then(response => context.commit('UPDATE_CART', response.data))
        }
    },

    getters: {
        items: state => state.items,
        total: state => {
            return state.items.reduce((total, item) => (item.quantity * item.price) + total, 0).toFixed(2)
        },
        quantity: state => state.items.reduce((quantity, item) => item.quantity + quantity, 0)
    }
}