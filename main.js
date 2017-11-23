import Vue from "vue";
 /*如果需要引入的文件是通过npm或者cnpm安装，用此方法：
  * import [name] from [fileName]
  * (系统默认会在node_modules中取遍历检索)
  *
  *如果是直接引入下载的文件：
  *import [name] from [Path+fileName]
  */
import root from "./template/root.vue";//引入的父组件
//三目
// Vue.filter("toSex",function (val) {
//     return (+val===0)?"男":"女";
// })
//过滤器
Vue.filter("toSex",function (val) {
    if (+val===0){
        return "男";
    }else {
        return "女";
    }
});

let config = {
    render:h=>h(root)//渲染组件
}
Vue.component("",{

})
const vm = new Vue(config);
vm.$mount("#app");
