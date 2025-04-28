<template>
  <button class="fancy-btn">
    <!--
    slot요소는 부모 컴포넌트에서 제공하는 콘텐츠를 나타내는 슬롯 콘텐츠입니다
    슬롯은 텍스트 뿐만아니라 HTML요소, 컴포넌트 등 다양한 모든 콘텐츠가 될 수 있습니다
    -->
    <slot>Defalut Click!</slot>
  </button>
</template>

<script>
export default {
  setup () {
    

    return {}
  }
}
</script>

<style>
  .fancy-btn{
    color:#fff;
    background: linear-gradient(315deg, #42d392 25%, #647eff);
    border:none;
    padding:5px 12px;
    margin:5px;
    border-radius: 8px;
    cursor:pointer;
  }
</style>