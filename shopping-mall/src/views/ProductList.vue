<template>
  <div class="p-list">
    <div class="items" :key="i" v-for="(item, i) in items">
      <img :src="item.image" :alt="item.type" class="item_thumbnail"/>
      <span class="item_description">
        {{ item.gender }}, {{ item.size }} - {{ item.name }} 
      </span>
    </div>
  </div>
</template>

<script>
export default {
  //App.vue로부터 전달받은 items데이터
  props:['items'],
  setup (props) {

    return {
      //items 데이터를 템플릿에서 사용할 수 있도록 반환
      items: props.items
    }
  }
}
</script>

<style scoped>
  .p-list{
    width:80%;
    height:60%;
    border:1px solid red;
    overflow-y:scroll;
  }
  .items{
    background-color:#fff;
    display:flex;
    align-items: center;
    padding:10px;
    margin-bottom:10px;
  }
  .item_thumbnail{
    width:50px;
    height:50px;
  }
  .item_description{
    margin-left:10px;
  }
</style>