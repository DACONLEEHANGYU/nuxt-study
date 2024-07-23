<template>
  <div>
    {{ products }}
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  async asyncData() {
    const response = await axios.get('http://localhost:3000/products')
    console.log(response)
    const products = response.data
    return { products }

    // data 속성에 정의된 product 배열에 axios 를 통해 전달받은 데이터를 할당

    // asyncData는 페이지가 그려지기 이전에 호출되는 함수이므로 data속성에 정의된 속성을 사용할 수 없다.
    //this.products = response.data
  }
}
</script>

<style lang="scss" scoped></style>
