<template>
<div id="cart">
	<div class="cart--header has-text-centered">
		<i class="fa fa-2x fa-shopping-cart"></i>
	</div>
	<ul>
		<li class="cart-item" 
			v-for="item in items"
			:key="item.id"
		>
			<CartListItem :item="item"/>
		</li>
		<div class="cart-details">
			<p>Total Quantity: <span class="has-text-weight-bold">{{ quantity }}</span></p>
			<p class="cart-remove-all--text"
				@click="removeAll"
			>
				<i class="fa fa-trash"></i>Remove all
			</p>
		</div>
	</ul>
	<button class="button is-primary">
		Checkout (<span class="has-text-weight-bold">$ {{ total }}</span>)
	</button>
</div>
</template>

<script>
import CartListItem from './CartListItem'
export default {
  name: 'CartList',

  components: {
	  CartListItem
  },

  created() {
	  this.$store.dispatch('getCartItems')
  },

  computed: {
	items() {
		return this.$store.getters.items
	},
	total() {
		return this.$store.getters.total
	},
	quantity() {
		return this.$store.getters.quantity
	},
  },
  methods: {
	removeAll() {
		this.$store.dispatch('removeAll')
	  }
  }
}
</script>

<style scoped>
#cart {
  height: 100%;
  padding: 30px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.cart-empty-text {
  padding: 10px 0;
}

.cart--header {
  border-bottom: 1px solid #E8E8E8;
  padding-bottom: 15px;
}

.cart-item {
  padding: 10px 0;
}

.cart-details {
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  padding: 15px;
}

.cart-remove-all--text {
  cursor: pointer;
}

.cart-remove-all--text .fa {
  padding-right: 5px;
}
</style>
