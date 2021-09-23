<template>
  <section class="ftco-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 ftco-animate">
          <h2 class="mb-3 font-weight-bold">
            {{ article.title }}
          </h2>
          {{ article.desc }}
          <div class="tag-widget post-tag-container mb-5 mt-5">
            <div class="tagcloud">
              <a
                href="#"
                class="tag-cloud-link"
                v-for="tag in article.tags"
                :key="tag"
                >{{ tag }}</a
              >
            </div>
          </div>

          <div class="about-author d-flex p-4 bg-light">
            <div class="bio mr-5">
              <img
                :src="article.author.portrait"
                alt="Image placeholder"
                class="img-fluid mb-4"
              />
            </div>
            <div class="desc">
              <h3>{{ article.author.name }}</h3>
              <p>
                {{ article.author.intro }}
              </p>
            </div>
          </div>

          <div class="pt-5 mt-5">
            <h3 class="mb-5 font-weight-bold">
              {{ article.comments.length }} Comments
            </h3>
            <ul class="comment-list">
              <li
                class="comment"
                v-for="comment in article.comments"
                :key="comment.id"
              >
                <div class="vcard bio">
                  <img
                    :src="comment.commentator.portrait"
                    alt="Image placeholder"
                  />
                </div>
                <div class="comment-body">
                  <h3>{{ comment.commentator.name }}</h3>
                  <div class="meta">{{ comment.postTime }}</div>
                  <p>
                    {{ comment.content }}
                  </p>
                  <p><a href="#" class="reply">Reply</a></p>
                </div>
                <ul class="children">
                  <li
                    class="comment"
                    v-for="comment2 in comment.comments"
                    :key="comment2.id"
                  >
                    <div class="vcard bio">
                      <img
                        :src="comment2.commentator.portrait"
                        alt="Image placeholder"
                      />
                    </div>
                    <div class="comment-body">
                      <h3>{{ comment2.commentator.name }}</h3>
                      <div class="meta">{{ comment2.postTime }}</div>
                      <p>
                        {{ comment2.content }}
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
            <!-- END comment-list -->

            <div class="comment-form-wrap pt-5">
              <h3 class="mb-5">Leave a comment</h3>
              <form action="#" class="p-3 p-md-5 bg-light">
                <div class="form-group">
                  <label for="name">Name *</label>
                  <input type="text" class="form-control" id="name" />
                </div>
                <div class="form-group">
                  <label for="email">Email *</label>
                  <input type="email" class="form-control" id="email" />
                </div>
                <div class="form-group">
                  <label for="website">Website</label>
                  <input type="url" class="form-control" id="website" />
                </div>

                <div class="form-group">
                  <label for="message">Message</label>
                  <textarea
                    name=""
                    id="message"
                    cols="30"
                    rows="10"
                    class="form-control"
                  ></textarea>
                </div>
                <div class="form-group">
                  <input
                    type="submit"
                    value="Post Comment"
                    class="btn py-3 px-4 btn-primary"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>

        <RightList></RightList>
     
      </div>
    </div>
  </section>
</template>

<script>
import http from "@/utils/http";
import RightList from "@/components/RightList.vue";

export default {
  name: "Single",
  components:{
    RightList
  },
  data() {
    return {
      article: {
        title: "",
        desc: "",
      },
    };
  },
  methods: {
    getArticle(articleId) {
      http.get("/getArticle").then((res) => {
     // http.get("/getArticle/" + articleId).then((res) => {
         
        this.article = res;; 
      });
    },
  },
  created() {
    //let articleId = this.$route.params.articleId;
   // this.getArticle(articleId);
    this.getArticle(1);
  },
};
</script>

<style>
</style>