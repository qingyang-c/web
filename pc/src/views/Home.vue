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
       <!-- <div class="row">
           <div class="col-md-4" v-for="article in articles" :key="article.id">
            <div class="blog-entry ftco-animate">
              <a
                href="#"
                class="img img-2"
                :style="{ backgroundImage: `url(${article.cover})` }"
              ></a>
              <div class="text text-2 pt-2 mt-3">
                <span class="category mb-3 d-block">
                  <a href="#" v-for="(tag, index) in article.tags" :key="tag">
                    {{ tag }}
                    <span v-if="index + 1 != article.tags.length">,</span>
                  </a>
                </span>
                <h3 class="mb-4">
                  <router-link :to="{ path: '/single' }">{{
                    article.title
                  }}</router-link>
                </h3>
                <p class="mb-4">{{ article.desc }}</p>
                <div class="author mb-4 d-flex align-items-center">
                  <a
                    href="#"
                    class="img"
                    :style="{ backgroundImage: `url(${article.portrait})` }"
                  ></a>
                  <div class="ml-3 info">
                    <span>Written by</span>
                    <h3>
                      <a href="#">{{ article.author }}</a
                      >, <span>{{ article.date }}</span>
                    </h3>
                  </div>
                </div>
                <div class="meta-wrap align-items-center">
                  <div class="half order-md-last">
                    <p class="meta">
                      <span
                        ><i class="icon-heart"></i>{{ article.meta.like }}</span
                      >
                      <span
                        ><i class="icon-eye"></i>{{ article.meta.watch }}</span
                      >
                      <span
                        ><i class="icon-comment"></i
                        >{{ article.meta.comment }}</span
                      >
                    </p>
                  </div>
                  <div class="half">
                    <p>
                      <a href="#" class="btn py-2"
                        >Continue Reading
                        <span class="ion-ios-arrow-forward"></span
                      ></a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div> -->
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
