
<template>
  <div>
    <Cover :carousel="true" :imgs="carouselImgs"></Cover>
  </div>
</template>

<script>
import Cover from "@/components/Cover";
export default {
  components: {
    Cover,
  },
  data() {
    return {
      carouselImgs: [
          require('../assets/images/bg_2.jpg'),
          require('../assets/images/bg_3.jpg'),
      ],
    };
  },
};
</script>

<style>
</style>