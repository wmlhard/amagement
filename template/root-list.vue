<template lang="html">
    <div class="root-list">
        <table class="table">
            <thead v-if="peoples.length>0">
                <tr>
                    <td class="text-center">姓名</td>
                    <td class="text-center">性别</td>
                    <td class="text-center">电话</td>
                    <td class="text-center">操作</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(people,index) in peoples" >
                    <td class="text-center">{{people.name}}</td>
                    <!--在页面中用到过滤器——>main.js-->
                    <td class="text-center">{{people.sex|toSex}}</td>
                    <td class="text-center">{{people.tel}}</td>
                    <td class="text-center">
                        <button type="button" @click="change(index)" class="btn btn-xs btn-primary">修改</button>
                        <button type="button" @click="del(index)" class="btn btn-xs btn-danger" >删除</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import {Bus} from "../bus.js";
export default {
    data(){
        return{
            peoples:[
                {
                    name:"蓝胖子",
                    sex:"0",
                    tel:"027-8793156"
                },
                {
                    name:"红胖子",
                    sex:"1",
                    tel:"17740604512"
                },
                {
                    name:"蓝胖子",
                    sex:"0",
                    tel:"027-8794110"
                },
                {
                    name:"红胖子",
                    sex:"1",
                    tel:"17740601227"
                },

            ]
        }
    },
    methods:{
        del(index){
            this.peoples.splice(index,1);
        },
        change(index){
            this.$emit("changeText",this.peoples[index]);

        }

    },
//    添加
    created:function () {
        const _this = this;
        Bus.$on("peopleData",function (val) {
            _this.peoples.push(val)
        })
    }
}
</script>

<style lang="css">

    .root-list{
        margin-top: 60px;
    }
</style>
