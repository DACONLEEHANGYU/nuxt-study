<template>
  <div class="app">
    <main>
      <div>
        <input type="text" />
      </div>
      <!-- data 속성에 정의된 products 를 콧수염 표현식, 보간법으로 div 태그 안에 표시 -->
      <ul>
        <li
          class="item flex"
          v-for="product in products"
          :key="product.id"
          @click="moveToDetailPage(product.id)"
        >
          <img
            class="product-image"
            :src="product.imageUrl"
            :alt="product.name"
          />
          <p>{{ product.name }}</p>
          <span>{{ product.price }}</span>
        </li>
      </ul>
    </main>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  async asyncData() {
    const response = await axios.get('http://localhost:3000/products')
    console.log(response)

    // 각각의 배열 요소를 변경할 수 있는 API
    // 화살표 함수의 축약형으로 return 값 설정 가능
    const products = response.data.map(item => ({
      ...item,
      //imageUrl: `${item.imageUrl}?random=${Math.random()}`
      imageUrl:
        'https://wallpapers.com/images/high/tiger-face-behind-the-branch-uzmuw82lgw2171e4.webp'
    }))

    console.log(products)
    return { products }

    // data 속성에 정의된 product 배열에 axios 를 통해 전달받은 데이터를 할당

    // asyncData는 페이지가 그려지기 이전에 호출되는 함수이므로 data속성에 정의된 속성을 사용할 수 없다.
    //this.products = response.data
  },
  //data 속성으로 products 배열을 선언
  // data() {
  //   return {
  //     products: []
  //   }
  // },
  // // axiso를 이용한 데이터 요청
  // // main.vue 페이지가 생성될 때, 데이터를 요청하도록 설정

  // async created() {
  //   const response = await axios.get('http://localhost:3000/products')
  //   console.log(response)
  //   // data 속성에 정의된 product 배열에 axios 를 통해 전달받은 데이터를 할당
  //   this.products = response.data
  // }
  methods: {
    moveToDetailPage(id) {
      console.log(id)
      this.$router.push(`detail/${id}`)
    }
  }
}
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
}
.item {
  display: inline-block;
  width: 400px;
  height: 300px;
  text-align: center;
  margin: 0 0.5rem;
  cursor: pointer;
}
.product-image {
  width: 400px;
  height: 250px;
}
.app {
  position: relative;
}
.cart-wrapper {
  position: sticky;
  float: right;
  bottom: 50px;
  right: 50px;
}
.cart-wrapper .btn {
  display: inline-block;
  height: 40px;
  font-size: 1rem;
  font-weight: 500;
}
</style>
