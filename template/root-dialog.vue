<template lang="html">
    <form class="root-dialog">
        <h4 class="root-dialog-title">{{title}}</h4>
        <div class="form-group col-xs-12">
            <label class="col-xs-3 text-right" for="added_name">姓名:</label>
            <div class="col-xs-9">
                <input class="form-control" type="text" id="added_name" v-model="added_info.name"  :value="added_info.name">
            </div>

        </div>
        <div class="form-group col-xs-12">
            <label class="col-xs-3 text-right label-control" for="added_sex">性别:</label>
            <div class="col-xs-9">
                <span class="sex-title">男：</span>
                <input class="sex-check" type="radio" name="sex" id="male" v-model="added_info.sex" :value="0" checked="checked">
                <label class="lab" for="male"></label>
                <span class="sex-title" >女：</span>
                <input class="sex-check" type="radio" name="sex" id="female" v-model="added_info.sex" :value="1" checked="checked">
                <label class="lab" for="female"></label>

            </div>

        </div>
        <div class="form-group col-xs-12">
            <label class="col-xs-3 text-right" for="added_tel">电话:</label>
            <div class="col-xs-9">
                <input class="form-control" type="text" id="added_tel" v-model="added_info.tel" :value="added_info.tel">
            </div>

        </div>
        <div class="btnBox text-center">
        <button class="sure btn btn-success" type="button" @click="comfirm">确定</button>
        <button class="default btn btn-warning" type="button" @click="cancel">取消</button>
        </div>
        <p class="text-center text-danger">{{errorMsg}}</p>
    </form>
</template>

<script>
import {Bus} from "../bus.js";
export default {
    data(){
        return{
            errorMsg:"",
            title:"添加新成员",
            added_info:{
                name:"",
                sex:"",
                tel:""
            }
        }
    },
    methods:{
        comfirm(){
            var reg_addTel = /^1[2|3|4|5|8][0-9]{9}$/.test(this.added_info.tel);
            var reg_addName = /^[\u4E00-\u9FA5-A-Za-z]+$/.test(this.added_info.name);
            if (this.title==="添加新成员"){
                if (this.added_info.name===""||this.added_info.tel===""){
                    this.$emit("sendErrorMsg","请将信息填写完整")
                }
                else if (reg_addName==false){
                    this.$emit("sendErrorMsg","姓名填写不规范")
                }
                else if (reg_addTel==false){
                    this.$emit("sendErrorMsg","手机号码不正确")
                }
                else {
                    Bus.$emit("peopleData",this.added_info);
                    this.$emit("toggleToClose","添加成功！");
                }
            }
            else {
                if (this.added_info.name===""||this.added_info.tel===""){
                    this.$emit("sendErrorMsg","请将信息填写完整")
                }
                else if (reg_addName===false){
                    this.$emit("sendErrorMsg","姓名填写不规范")
                }
                else if (reg_addTel==false){
                    this.$emit("sendErrorMsg","手机号码不正确")
                }
                else {
                    this.$emit("toggleToClose");
                }
            }

        },
        cancel(){
            this.$emit("toggleToClose");
        }
    }
}
</script>

<style lang="css">
    .root-dialog{
        width: 80vw;
        height: 80vw;
        border-radius: 5px;
        background: #ccc;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
    }
    .root-dialog-title{
        text-align: center;
    }
    .sure{
        margin-left: 100px;
    }
    .root-dialog-title{
            margin-top: 15px;
    }
    .sex-check[type="radio"]{
        display: none;
    }
    .lab{
        display: inline-block;
        width: 20px;
        height: 20px;
        overflow: hidden;
        text-align: center;
        border:1px solid #eeeeee;
        border-radius: 50%;
        margin-right: 10px;
        background: #f0ad4e;
        position: relative;
        vertical-align: middle;
    }

    .lab:after{
        content: "";
        position: absolute;
        top: 2px;
        left: 2px;
        width: 14px;
        height: 14px;
        background-color: #00b3ee;
        border-radius: 50%;
        transform: rotate(-180deg);
        transform-origin: -2px 50%;
        transition: transform .2s ease-in;
    }

    .sex-check[type="radio"]:checked + .lab:after{
        transform: rotate(0deg);
        transition: transform .2s ease-out;
    }
    .sex-title{
        vertical-align: text-top;
    }

</style>
