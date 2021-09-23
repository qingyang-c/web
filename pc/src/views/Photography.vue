<template>
  <div class="photography">
   
   <div class="imgshow">
              <ImgShow></ImgShow>
            </div> 
    <div id="colorlib-page">
      <a href="#" class="js-colorlib-nav-toggle colorlib-nav-toggle"><i></i></a>
      
      <!-- END COLORLIB-ASIDE -->
      <div id="colorlib-main">
        <section class="ftco-section-2">
          <div class="photograhy">
            <div class="row no-gutters">
              <div class="col-md-3" v-for="pho in photoList" :key="pho" :style="{'position':'relative'}" >
                <a
                  href="#"
                  class="
                    photography-entry
                    img
                    d-flex
                    justify-content-center
                    align-items-center
                  "
                  :style="`background-image: url(` + pho.cover + `);`"
                >
                <div >
              <img  :style="{  'opacity': '0',
                              'position':'absolute',
                              'right':'0',
                              'top':'0',
                              'background-color':'black',
                              'width':'100%',
                              'height':'270px'}" preview="1" :preview-text="pho.desc" :large="pho.cover" src="../assets/images/author.jpg"/>

          </div>
           

                  <div class="overlay"></div>
                  <div class="text text-center">
                    <h3>Work 
                      <span>{{pho.date}}</span>
                      </h3>
                    <span>{{pho.tags}}</span>
                  </div>
                </a>
              </div>



              


            </div>
          </div>
        </section>
        
      </div>
      <!-- END COLORLIB-MAIN -->
    </div>
    <!-- END COLORLIB-PAGE -->




    <Footer></Footer>
  </div>

  
</template>

<script>
import Footer from "../components/Footer.vue";
import ImgShow from "../components/ImgShow.vue";
export default {
  name: "Photography",
  components: {
    Footer,
    ImgShow
  },
  data(){
    return{
      photoList:[],
    }
  },

  created(){
    this.getPhotoCategory() ;
  },
  methods: {
    getPhotoCategory(){
      this.axios
        .get(
          "https://www.fastmock.site/mock/5bbe2554e79ae8a05a5b5a6249e12e5d/my-website-practice/getPhotography"
        )
        .then((res) => {
         this.photoList = res.data.data.list;
          // console.log(res.data);
        });
        
    },

    
　　},
　　
  
};
</script>

<style lang="scss" scoped>
#colorlib-main{
  width: 100%;
}
.imgshow{
 // position: absolute;
  //opacity: 0;
}
</style>