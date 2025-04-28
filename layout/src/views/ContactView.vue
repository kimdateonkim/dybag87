<template>
  <main>
    <section id="contact">
      <div class="wrap">
        <article class="info">
          <div class="txt">
            <h1>Contact Info.</h1>
            <p class="text">
              Lorem ipsum dolor sit amet consectetur<br> adipisicing elit. Minima, possimus<br>
              placeat suscipit enim maxime est illo<br> necessitatibus dignissimos
            </p>
            <p class="address">
              <b>Address:</b>
              10111 Santa Monica Boulevard, LA
            </p>
            <p class="phone">
              <b>Phone:</b>
              +82 02 123 1234
            </p>
            <p class="email">
              <b>Email:</b>
              info@piroll.com
            </p>
            <p class="fax">
              <b>Fax:</b>
              +82 02 123 1234
            </p>
          </div>
          <form>
            <input type="text" placeholder="Your Name">
            <input type="email" placeholder="Your Email">
            <input type="text" placeholder="Your Title">
            <textarea placeholder="Your Comment"></textarea>
            <input type="submit" value="SEND MESSAGE">
          </form>
        </article>
        <article class="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.1861203503195!2d127.12712117642579!3d37.432707731789755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca883df7418d1%3A0x1e9926ba0f71d15c!2z7J207KCgSVTsu7Ttk6jthLDslYTsubTrjbDrr7g!5e0!3m2!1sko!2skr!4v1741319299013!5m2!1sko!2skr"
            width="1180" height="440" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </article>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  setup() {


    return {}
  }
}
</script>

<style scoped>
#contact{
  min-width:1300px;
  background-color:#f5f5f5;
}
#contact .wrap{
  padding:80px 60px;
}

#contact .info{
  display:flex;
  margin-bottom:80px;
  justify-content: space-between;
}

#contact .info h1{
  font-size:28px;
  color:#333;
  line-height: 80px;
}
#contact .info p{
  line-height: 30px;
  color:#666;
}
#contact .info .text{
  line-height:20px;
  margin-bottom:40px;
}

#contact form{
  width:635px;
  margin-top:46px;
}
input[type=text], input[type=email]{
  width:310px;
  height:40px;
  text-indent: 20px;
  background-color:#fff;
  border:none;
  outline:none;
  float:left;
  box-sizing: border-box;
  margin-bottom:20px;
}
input[type=email]{
  margin-left:15px;
}

input:nth-of-type(3){
  width:100%;
}

textarea{
  width:100%;
  height:160px;
  border:none;
  outline:none;
  background-color: #fff;
  padding:20px;
  box-sizing: border-box;
  font-size:15px;
  resize:none;
}

input[type=submit]{
  margin-top:40px;
  width:168px;
  height:40px;
  font-size:14px;
  color:#fff;
  font-weight: bold;
  background-color: #10c9c3;
  border:none;
  outline: none;
  cursor:pointer;
}
</style>