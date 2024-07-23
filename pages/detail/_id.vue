<template>
   <div>
    <div class="container">
      <div class="main-panel">
        <img
          class="product-image"
          :src="imageUrl"
          :alt="product.name"
        />
      </div>
      <div class="side-panel">
        <p class="name">{{ product.name }}</p>
        <p class="price">{{ product.price }}</p>
        <!-- <button type="button" @click="addToCart">Add to Cart</button> -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { fetchProductById } from '@/api/index.js'
export default {

  async asyncData({params}){
    
    // asyncData 안에서는 this 가 접근이 불가능 하다.
    // 페이지를 불러오기 전이기 때문
    //const id = this.$route.params.id
    const id = params.id
    const response = await fetchProductById(id)
    const product = response.data
    return { product }
  },data(){
    return{
      imageUrl:'https://wallpapers.com/images/high/tiger-face-behind-the-branch-uzmuw82lgw2171e4.webp'
    }
  }

  // created() {
  //   const id = this.$route.params.id
  //   fetchProductById(id)
  // }
}
</script>


<style scoped>
/*
 scoped 속성을 사용하면 해당 컴포넌트에서만 스타일이 적용된다.
*/
.container {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}
.product-image {
  width: 500px;
  height: 375px;
}
.side-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 220px;
  text-align: center;
  padding: 0 1rem;
}
</style>
