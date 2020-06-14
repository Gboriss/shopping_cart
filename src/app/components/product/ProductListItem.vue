<template>
<div>
    <h2 class="has-text-weight-bold"> 
        {{ product.title }}
        <span class="tag is-primary is-pulled-right has-text-white"
            @click="addCartItem(product)"
        >
        Add to Cart
        </span>
    </h2>
    <p>{{ product.description }}</p>
    <span class="has-text-primary has-text-weight-bold">
        <i class="fa fa-usd"></i> {{ product.price }}
    </span>
</div>
</template>

<script>

export default {
    name: 'ProductListItem',
    props: ['product'],
    methods: {
        addCartItem(product) {
			this.$store.dispatch('addCartItem', product)
        }

    }

}
</script>

<style scoped>
.tag {
    cursor: pointer;
}
</style>