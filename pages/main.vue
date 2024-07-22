<template>
  <div>
    <p>메인 페이지 입니다.</p>
    <div>
      <!-- data 속성에 정의된 products 를 콧수염 표현식, 보간법으로 div 태그 안에 표시 -->
      <ProductList></ProductList>      
    </div>
  </div>  
</template>
<script>

import axios from 'axios'
import ProductList from '~/components/ProductList.vue';

export default {  
  components:{
    ProductList
  },

  // async asyncData(){
  //   const response = await axios.get('http://localhost:3000/products')
  //   console.log(response)
  //   const products = response.data
  //   return { products }
    
  //   // data 속성에 정의된 product 배열에 axios 를 통해 전달받은 데이터를 할당

  //   // asyncData는 페이지가 그려지기 이전에 호출되는 함수이므로 data속성에 정의된 속성을 사용할 수 없다.
  //   //this.products = response.data
  // },
  // data 속성으로 products 배열을 선언
  data(){
    return{
      products:[]
    }
  },
  // axiso를 이용한 데이터 요청
  // main.vue 페이지가 생성될 때, 데이터를 요청하도록 설정

  

  async created(){
    const response = await axios.get('http://localhost:3000/products')
    console.log(response)
    // data 속성에 정의된 product 배열에 axios 를 통해 전달받은 데이터를 할당
    this.products = response.data
  }

}
</script>

<style lang="scss" scoped></style>
