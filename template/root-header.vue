<template lang="html">
    <div class="root-header clearfix">
        <i :class="[{'glyphicon glyphicon-menu-left':headerData.toBack},'col-xs-2 toBack']"></i>
        <span class="col-xs-8 text-center toBack">{{headerData.title}}</span>
        <span class="col-xs-2"></span>
    </div>
</template>

<script>
export default {
    data(){
        return{
            headerData:{
                toBack:true,
                title:"人员管理",
                information:false
            }
        }
    }
}
</script>

<style lang="css">
    .toBack{
        line-height: 60px;
    }
    .root-header{
        height: 60px;
        position: fixed;
        top:0;
        left: 0;
        right: 0;
        background: deepskyblue;
        color: white;
        font-size: 17px;
    }
    .clearfix:after{
        content: "";
        display: block;
        clear: both;
    }
</style>
