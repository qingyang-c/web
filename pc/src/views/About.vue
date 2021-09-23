
<template>
  <div>
    <Cover :bgImg="require('../assets/images/bg_4.jpg')">
      <ul class="ftco-social mt-3">
        <li class="ftco-animate">
          <a href="#"><span class="icon-twitter"></span></a>
        </li>
        <li class="ftco-animate">
          <a href="#"><span class="icon-facebook"></span></a>
        </li>
        <li class="ftco-animate">
          <a href="#"><span class="icon-instagram"></span></a>
        </li>
      </ul>
    </Cover>
  </div>
</template>

<script>
import Cover from "@/components/Cover";

export default {
  components: {
    Cover,
  
  },
};
</script>

<style>
</style>