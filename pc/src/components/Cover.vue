<template>
  <div>
    <div
      v-if="!carousel"
      id="cover"
      :style="{
        'background-position-y': positionY1 + 'px',
        'background-image': 'url(' + bgImg + ')',
      }"
      class="hero-wrap js-fullheight"
      data-stellar-background-ratio="0.5"
    >
      <div class="overlay"></div>
      <div
        class="js-fullheight d-flex justify-content-center align-items-center"
      >
        <div class="col-md-8 text text-center">
          <div class="img mb-4"></div>
          <div class="desc">
            <h2 class="subheading">Hello I'm</h2>
            <h1 class="mb-4">Elen Henderson</h1>
            <p class="mb-4">{{ desc }}</p>
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
    <section v-else class="home-slider js-fullheight owl-carousel">
      <div
        v-for="img in imgs"
        :key="img"
        class="slider-item js-fullheight"
        :style="{ 'background-image': 'url(' + img + ')' }"
      >
        <div class="overlay"></div>
        <div class="container-fluid">
          <div
            class="
              row
              no-gutters
              slider-text slider-text-2
              js-fullheight
              align-items-center
              justify-content-center
            "
            data-scrollax-parent="true"
          >
            <div
              class="col-md-10 text-center ftco-animate"
              data-scrollax=" properties: { translateY: '70%' }"
            >
              <h1
                class="mb-4"
                data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
              >
                Discover the Place
              </h1>
              <p
                data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
              >
                Find great places to stay, eat, shop, or visit from local
                experts
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    desc: {
      type: String,
      default: `I am A Blogger Far far away, behind the word mountains, far from the
            countries Vokalia and Consonantia, there live the blind texts.
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics, a large language ocean.`,
    },
    bgImg: {
      type: String,
      // default: "@/assets/images/bg_1.jpg",
      default: require("@/assets/images/bg_1.jpg"),
    },
    carousel: {
      type: Boolean,
      default: false,
    },
    imgs: {
      type: Array,
      default(){
        return []
      },
    },
  },
  computed: {
    // bgImage() {
    //   return require(this.bgImg);
    // },
  },
  data() {
    return {
      positionY1: 0, //背景Y轴偏移量
      Y1: 0,
      ratio: 0.5, //视差偏移率
      coverData: {
        coverImg: "https://sm.ms/image/FpWKfoJMDbUc9Ze",
        authorImg: "https://sm.ms/image/RlvAVfpW4nzErNQ",
      },
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll); //创建滚动监听，页面滚动回调handleScroll方法
    let cover = document.getElementById("cover");
    this.Y1 = cover.offsetTop * this.ratio;
  },
  methods: {
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop == 0) {
        this.positionY1 = -25;
      } else {
        this.positionY1 = this.Y1 + scrollTop * this.ratio; //原始高度+滚动距离*视差系数
      }
    },
    getcoverData() {},
  },
};
</script>

<style lang="scss">
#cover {
  .js-fullheight {
    height: 100vh;
  }
  // background-image: url(../assets/images/bg_1.jpg);

  .img {
    background-image: url(../assets/images/author.jpg);
  }
}
</style>