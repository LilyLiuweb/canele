import { groupBy } from 'lodash';
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cartStore',{
    state:()=>{
        return{
            cart:[]
        }
    },
    getters:{
        cartCount:(state) => state.cart.length,
        isEmpty:(state) => state.count === 0,
    },
    actions:{
        addToCart(id){
            this.cart.push(id);
        }
    }
})