<template>
  <main>
    <!--배너 부분을 slideImage컴포넌트로 병경-->
    <slide-image />
    <section id="numbers">
      <div class="wrap">
        <article class="item">
          <img src="../assets/images/bag.png" alt="">
          <p>
            <b>548</b><br>
            projects completed
          </p>
        </article>
        <article class="item">
          <img src="../assets/images/clock.png" alt="">
          <p>
            <b>1465</b><br>
            working hours
          </p>
        </article>
        <article class="item">
          <img src="../assets/images/star.png" alt="">
          <p>
            <b>612</b><br>
            positive feedbacks
          </p>
        </article>
        <article class="item">
          <img src="../assets/images/heart.png" alt="">
          <p>
            <b>735</b><br>
            happy clients
          </p>
        </article>
      </div>
    </section>
    <section id="about-me">
      <div class="wrap">
        <div class="pic"><img src="../assets/images/about_me.jpg"></div>
        <div class="txt">
          <h1>About me</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis amet, eveniet nulla nisi voluptatem adipisci
            accusantium dolorum, praesentium</p>
          <p>similique aliquam velit sequi inventore? Pariatur illum sapiente labore optio sequi incidunt!</p>
          <img src="../assets/images/sign.png" alt="">
        </div>
      </div>
    </section>
    <section id="project">
      <div class="wrap">
        <h1>Need a Project?</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.<br>
          Fuga non exercitationem beatae
        </p>
        <a href="#">Let's talk</a>
      </div>
    </section>
  </main>
</template>

<script>
  //slideImage컴포넌트 임포트
  import SlideImage from '@/components/SlideImage.vue';

  //컴포넌트 등록
  export default {
    components: {SlideImage}
  }
</script>

<style>
#banner{
  min-width:1300px;
  height:320px;
  background:#f6f6f6;
  text-align: center;
}
.swiper{
  width:100%;
  height:100%;
}
.swiper-slide{
  text-align: center;
  font-size:18px;
  background:#fff;
  display:flex;
  justify-content: center;
  align-items: center;
}
.swiper-slide img{
  display:block;
  width:100%; height:100%;
  object-fit: cover;
}

#numbers{
  min-width:1300px;
  padding:100px 0;
  overflow: hidden;
  background-color:#10c9c3;
  color:#fff;
}
#numbers .wrap{
  display:flex;
}
#numbers .item{
  width:25%;
  height:40px;
  border-right:2px solid #fff;
  display:flex;
  justify-content: center;
  align-items: center;
  gap:20px;
}
#numbers .item:first-child{
  border-left:2px solid #fff;
}
#numbers .item p{
  font-size:12px;
  line-height:20px;
  text-transform: uppercase; /*영문을 대문자로 변경*/
}
#numbers .item p b{
  font-size:16px;
}

#about-me{
  min-width:1300px;
  height:520px;
  background-color:#f5f5f5;
}
#about-me .wrap{
  display:flex;
  align-items: center;
}
#about-me .txt{
  padding:0 100px;
}
#about-me .txt h1{
  font-size:28px;
  color:#191919;
  margin-bottom:20px;
}
#about-me .txt p{
  color:#666;
  line-height:20px;
  margin-bottom:20px;
}
#about-me .txt img{
  margin-top:20px;
}

#project{
  min-width:1300px;
  height:360px;
  text-align: center;
  overflow: hidden;
}
#project h1{
  font-size:28px;
  color:#191919;
  margin:80px 0 20px;
}
#project p{
  color:#666;
  margin-bottom:40px;
  line-height:20px;
}

#project a{
  display:inline-block;
  width:170px;
  line-height:50px;
  background-color:#10c9c3;
  font-size:12px;
  font-weight: bold;
  color:#fff;
  letter-spacing: 2px;
}
#project a:hover{
  background-color:#0caca6;
}
</style>
