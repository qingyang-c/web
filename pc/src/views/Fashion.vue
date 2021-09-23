<template>
  <div class="fashion">
    <Cover desc="哈哈，你猜我想说点啥😜">
      <p>
        <a href="#" class="btn-custom">
          More About Me
          <span class="ion-ios-arrow-forward"></span>
        </a>
      </p>
    </Cover>
    <section class="ftco-section">
	    	<div class="container">
          <div class="frow">
        <ArticleList minWidth = 50%></ArticleList>
			  <RightList></RightList> 
          </div>
        </div>
	  </section>
  </div>
</template>
<style>
 .frow{
   display:flex;
 }
</style>
<script>
import Cover from "@/components/Cover.vue";
import ArticleList from "@/components/ArticleList.vue";
import RightList from "@/components/RightList.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
  ArticleList,
   Cover,
   Footer,
   RightList
  },
}
</script>
