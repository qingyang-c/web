
<template>
  <div class="row">
      <div class="col-md-4" v-for="article in articles" :key="article.id" 
      :style="{
        'min-width': minWidth,
      }">
        <div class="blog-entry ftco-animate"
        >
          <a
            href="#"
            class="img img-2"
            :style="`background-image: url(` + article.cover + `);`"
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
                :style="`background-image: url(` + article.portrait + `);`"
              ></a>
              <div class="ml-3 info">
                <span>Written by</span>
                <h3>
                  <a href="#">{{ article.author }}</a
                  >, <span>{{ article.data }}</span>
                </h3>
              </div>
            </div>
            <div class="meta-wrap align-items-center">
              <div class="half order-md-last">
                <p class="meta">
                  <span><i class="icon-heart"></i>{{ article.meta.like }}</span>
                  <span><i class="icon-eye"></i>{{ article.meta.watch }}</span>
                  <span
                    ><i class="icon-comment"></i
                    >{{ article.meta.comment }}</span
                  >
                </p>
              </div>
              <div class="half">
                <p>
                  <a href="#" class="btn py-2"
                    >Continue Reading <span class="ion-ios-arrow-forward"></span
                  ></a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

</template>
<style>

</style>


<script>
import http from "@/utils/http";
export default {
    props: {
    minWidth: {
      type: String,
      default: '33%',
    }
  },
  
  data() {
    return {
      articles: [],
    };
  },
  created() {
    this.getArticles();
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
};
</script>

