<template>
<div>
	<p class="cart-item--title is-inline">{{ item.title }}</p>
	<div class="is-pulled-right">
		<i class="fa fa-arrow-circle-up cart-item--modify"
			@click="addCartItem(item)"	
		></i>
		<i class="fa fa-arrow-circle-down cart-item--modify"
			@click="removeartItem(item)"	
		></i>
	</div>
	<div class="cart-item--content">
		<span class="cart-item--price has-text-primary has-text-weight-bold">
			{{ item.price }} each
		</span>
		<span class="cart-item--quantity has-text-grey is-pulled-right">
			Quantity: {{ item.quantity }}
		</span>
	</div>
</div>
</template>

<script>
export default {
	name: 'CartListItem',
	props: ['item'],
	methods: {
		addCartItem(item) {
			this.$store.dispatch('addCartItem', item)
		},
		removeartItem(item) {
			this.$store.dispatch('removeartItem', item)
		}
	}
}
</script>

<style>
.cart-item--modify {
	cursor: pointer;
}

</style>