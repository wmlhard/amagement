<template lang="html">
    <div class="root-content">
        <news ref="news" v-if="showTips"></news>
        <root-header></root-header>
        <root-list @changeText="teal" ref="rootList"></root-list>
        <transition name="bounce">
        <root-dialog ref="rootDialog" @sendErrorMsg="getErrorMsg" @toggleToClose="toggle" v-if="toggleVal"></root-dialog>
        </transition>
        <button v-if="!toggleVal" @click="toggle" type="button" name="button" class="btn btn-success btn-block">添加</button>
        <button @click="random" type="button" name="button" class="btn btn-warning btn-block">乱序</button>
        <button @click="onlyMaleOrFemale('male')" type="button" name="button" class="btn btn-primary btn-block">只看男生</button>
        <button @click="onlyMaleOrFemale('female')" type="button" name="button" class="btn btn-danger btn-block">只看女生</button>
        <button @click="showaAll" type="button" name="button" class="btn btn-danger btn-block">查看全部</button>
    </div>
</template>

<script>
import rootHeader from "./root-header.vue"
import rootList from "./root-list.vue"
import rootDialog from "./root-dialog.vue"
import news from "./news.vue"
import {Bus} from "../bus.js"
export default {
    data(){
        return{
            showTips:false,
            toggleVal:false,
            old_list:[]
        }
    },
    components:{
        rootHeader,
        rootList,
        rootDialog,
        news
    },
    methods:{
        toggle:function (){
            this.toggleVal=!this.toggleVal
        },
        teal:function (val) {
            this.toggleVal=!this.toggleVal;
            this.$nextTick(function () {
                this.$refs.rootDialog.added_info=val;
                this.$refs.rootDialog.title = "修改成员信息";
            });

        },
        getErrorMsg(val){
            this.showTips=!this.showTips;
            var _this = this;
            var timer = setTimeout(function () {
                _this.showTips = false;
            },2000);
            this.$nextTick(function () {
                this.$refs.news.tips = val;
            })
        },

//        乱序：
        random(){
            this.$refs.rootList.peoples.sort(function () {
                return Math.random()>0.5?-1:1;
            })
        },

        onlyMaleOrFemale(sex){
            let tem_ref = this.$refs.rootList.peoples;
            let toFindIndexStr = "";
            for(let i=0;i<this.old_list.length;i++){
                tem_ref.push(this.old_list[i])
            }

            switch(sex) {
                case "male" :
                    tem_ref.sort(function (a, b) {
                        return (+a.sex) - (+b.sex);
                    })
                    tem_ref.forEach(function (v) {
                        toFindIndexStr += v.sex;
                    });
                    this.old_list = toFindIndexStr.indexOf("1") != -1 && tem_ref.splice((toFindIndexStr.indexOf("1")));
                    break;
                case "female" :
                    tem_ref.sort(function (a, b) {
                        return (+a.sex) - (+b.sex);
                    }).reverse();
                    tem_ref.forEach(function (v) {
                        toFindIndexStr += v.sex;
                    });
                    this.old_list = toFindIndexStr.indexOf("0") != -1 && tem_ref.splice((toFindIndexStr.indexOf("0")));

                    break;


            }
        },
            showaAll(){
                let tem_ref = this.$refs.rootList.peoples;
                for (let i=0;i<this.old_list.length;i++){
                    tem_ref.push(this.old_list[i])
                }
                this.old_list = [];

            }

    }
}
</script>

<style lang="css" scoped="scoped">

    .bounce-leave-active{
        opacity: 0.3;
        position: absolute;
        bottom: 0;
        transition: all .5s ease-in-out;
    }
    .bounce-leave-to{
        bottom: 80px;
    }
    .bounce-enter-active{
        position: absolute;
        bottom: 80px;
        transition: all .5s ease-in-out;
    }
    .bounce-enter-to{
        transition: all .5s ease-in-out;
        bottom: 0;
        opacity: 0.7;
    }


</style>
