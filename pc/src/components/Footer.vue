<template>
    
	    <footer class="ftco-footer ftco-bg-dark ftco-section">
	      <div class="container px-md-5">
	        <div class="row mb-5">
	          <div class="col-md">
	            <div class="ftco-footer-widget mb-4 ml-md-4">
	              <h2 class="ftco-heading-2">Category</h2>
	              <ul class="list-unstyled categories">
					<li v-for="category in footerList" :key = category.id>
						 <a href="#">{{category.title}}<span>{{category.num}}</span></a>
					</li>
	              </ul>
	            </div>
	          </div>
	        
	          <div class="col-md">
	            <div class="ftco-footer-widget mb-4">
	            	<h2 class="ftco-heading-2">Have a Questions?</h2>
	            	<div class="block-23 mb-3">
		              <ul>
		                <li><span class="icon icon-map-marker"></span><span class="text">China</span></li>
		                <li><a href="#"><span class="icon icon-phone"></span><span class="text">13846421730</span></a></li>
		                <li><a href="#"><span class="icon icon-envelope"></span><span class="text">1442488022@qq.com</span></a></li>
		              </ul>
		            </div>
	            </div>
	          </div>
	        </div>
	      </div>
	    </footer>
</template>
<script>
import http from "@/utils/http";
export default {
  name: 'Footer',
  data() {
    return {
      footerList: [],
    };
  },
  methods: {
    getFooter() {
      http.get("/getFooter").then((res) => {
		  console.log(res.list);       
          this.footerList = res.list;
      });
    },
  },
  created() {
    this.getFooter();
  },
}
</script>
