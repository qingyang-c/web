<template>
  <div class="home">
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
        <div class="row justify-content-center mb-5 pb-2">
          <div class="col-md-7 heading-section text-center ftco-animate">
            <h2 class="mb-4">Articles</h2>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country.
            </p>
          </div>
        </div>
      
<ArticleList></ArticleList>
      
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Cover from "@/components/Cover.vue";
import http from "@/utils/http";
import Footer from "@/components/Footer.vue";
import ArticleList from "@/components/ArticleList.vue";
export default {
  name: "Home",
  components: {
    Cover,
    Footer,
    ArticleList
  },
  data() {
    return {
      articles: [],
    };
  },
  methods: {
    getArticles() {
      http.get("/getArticleList").then((res) => {
        if (res.message != "false") {
          this.articles = res.list;
        }

      });
    },
  },
  created() {
    this.getArticles();
  },
};
</script>
