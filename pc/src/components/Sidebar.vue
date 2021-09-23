<template>
  <div id="sidebar">
    <a href="#" class="js-colorlib-nav-toggle colorlib-nav-toggle"><i></i></a>
    <aside
      id="colorlib-aside"
      role="complementary"
      class="js-fullheight text-center"
    >
      <h1 id="colorlib-logo">
        <a href="index.html">elen<span>.</span></a>
      </h1>
      <nav id="colorlib-main-menu" role="navigation">
        <ul>
         
          <li v-for="nav in navs" :key="nav.title" :class="{'colorlib-active': nav.actived}" @click="changeActiveStatus(nav)">
            <router-link :to="nav.path">{{ nav.title }}</router-link>
          </li>
        </ul>
      </nav>
      <div class="colorlib-footer">
        <ul>
          <li>
            <a href="#"><i class="icon-facebook"></i></a>
          </li>
          <li>
            <a href="#"><i class="icon-twitter"></i></a>
          </li>
          <li>
            <a href="#"><i class="icon-instagram"></i></a>
          </li>
          <li>
            <a href="#"><i class="icon-linkedin"></i></a>
          </li>
        </ul>
      </div>
    </aside>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      navs: [
        { title: "Home", path: "/", actived: true },
        { title: "Photography", path: "/photography", actived: false },
        { title: "Travel", path: "/travel", actived: false },
        { title: "Fashion", path: "/fashion", actived: false },
        { title: "About", path: "/about", actived: false },
        { title: "Contact", path: "/contact", actived: false },
      ],
    };
  },
  methods: {
      changeActiveStatus(nav){
          this.navs.forEach((item) => {
              item.actived = false;
          });
          nav.actived = true;
      }
  }
};
</script>

<style lang="scss" scoped>
// #colorlib-aside #colorlib-main-menu ul li a.router-link-exact-active {
//   color: #000000;
// }
// #colorlib-aside #colorlib-main-menu ul li a.router-link-exact-active:after {
//   visibility: visible;
//   -webkit-transform: scaleX(1);
//   -moz-transform: scaleX(1);
//   -ms-transform: scaleX(1);
//   -o-transform: scaleX(1);
//   transform: scaleX(1);
// }
</style>>