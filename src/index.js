import "./index.htm";
import './base.less';
import Vue from "vue";
import MyCanvas1 from '@/components/myCanvas1';
import MyCanvas2 from '@/components/myCanvas2';
import myCanvas3 from '@/components/myCanvas3';
var app = new Vue({
    el: '#vue-app',
    components: {
        MyCanvas1,
        MyCanvas2,
        myCanvas3
    }
  })
  export default app;