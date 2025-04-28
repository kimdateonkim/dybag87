<template>
  <footer>
    <div class="wrap">
      <ul class="author">
        <li>Piroll Design, Inc.</li>
        <li>&copy; 2025 Piroll. All rights reserved.</li>
      </ul>
      <ul class="address">
        <li>hello@piroll.com</li>
        <li>+82 02 123 1234</li>
      </ul>
      <div class="links">
        <ul>
          <li><a href="#">Projects</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Carreer</a></li>
        </ul>
        <ul>
          <li><a href="#">News</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Legals</a></li>
        </ul>
        <ul>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Dribbble</a></li>
          <li><a href="#">Instagram</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  setup() {


    return {}
  }
}
</script>

<style scoped>
footer{
  border-top:1px solid #ddd;
  min-width:1300px;
  height:280px;
  background-color:#141414;
}
footer .wrap{
  padding:80px 60px;
  line-height:25px;
  font-size:14px;
  display:flex;
  justify-content: space-between;
  color:#bcbcbc;
}

footer .author li:first-child{
  font-size:16px;
  font-weight: bold;
  color:#fff;
  margin-bottom:20px;
}

footer .links{
  display:flex;
  gap:70px;
}

footer .links a{
  color:#bcbcbc;
}
</style>