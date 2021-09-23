<template>
    <div class="col-lg-4 sidebar ftco-animate">
          <div class="sidebar-box">
            <form action="#" class="search-form">
              <div class="form-group">
                <span class="icon icon-search"></span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Type a keyword and hit enter"
                />
              </div>
            </form>
          </div>
          <div class="sidebar-box ftco-animate">
            <h3 class="sidebar-heading">Categories</h3>
            <ul class="categories">
              <li v-for="category in categories" :key = category.id>
                <a href="#">{{category.title}} <span>{{category.num}})</span></a>
              </li>
            </ul>
          </div>

          <div class="sidebar-box ftco-animate">
            <h3 class="sidebar-heading">Popular Articles</h3>
            <div class="block-21 mb-4 d-flex">
              <a
                class="blog-img mr-4"
                style="background-image: url(images/image_1.jpg)"
              ></a>
              <div class="text">
                <h3 class="heading">
                  <a href="#">Even the all-powerful Pointing has no control</a>
                </h3>
                <div class="meta">
                  <div>
                    <a href="#"
                      ><span class="icon-calendar"></span> Oct. 04, 2018</a
                    >
                  </div>
                  <div>
                    <a href="#"><span class="icon-person"></span> Dave Lewis</a>
                  </div>
                  <div>
                    <a href="#"><span class="icon-chat"></span> 19</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="block-21 mb-4 d-flex" v-for="article in articles" :key = article.id>
              <a
                class="blog-img mr-4"
                style="{background-image: url(` + article.portrait + `)}"
              ></a>
              <div class="text">
                <h3 class="heading">
                  <a href="#">{{article.title}}</a>
                </h3>
                <div class="meta">
                  <div>
                    <a href="#"
                      ><span class="icon-calendar"></span>{{article.data}} </a
                    >
                  </div>
                  <div>
                    <a href="#"><span class="icon-person"></span> {{article.author}}</a>
                  </div>
                  <div>
                    <a href="#"><span class="icon-chat"></span> {{article.comment}}</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="block-21 mb-4 d-flex">
              <a
                class="blog-img mr-4"
                style="background-image: url(images/image_3.jpg)"
              ></a>
              <div class="text">
                <h3 class="heading">
                  <a href="#">Even the all-powerful Pointing has no control</a>
                </h3>
                <div class="meta">
                  <div>
                    <a href="#"
                      ><span class="icon-calendar"></span> Oct. 04, 2018</a
                    >
                  </div>
                  <div>
                    <a href="#"><span class="icon-person"></span> Dave Lewis</a>
                  </div>
                  <div>
                    <a href="#"><span class="icon-chat"></span> 19</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="sidebar-box ftco-animate">
            <h3 class="sidebar-heading">Tag Cloud</h3>
            <ul class="tagcloud">
              <a href="#" class="tag-cloud-link" v-for="tag in tags" :key = tag.id>{{tag.title}}</a>
            </ul>
          </div>

         

          

         
        </div>
</template>
<script>
import http from "@/utils/http";
export default {
  name: 'RightList',
  data() {
    return {
      categories: [],
      articles:[],
      tags:[]
    };
  },
  methods: {
    getRightList() {
      http.get("/getRightList").then((res) => {
		     this.categories = res.category;
         this.articles = res.article;
         this.tags = res.tag;
         console.log();
      });
    },
  },
  created() {
    this.getRightList();
  },
}

</script>