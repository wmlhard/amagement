<template lang="html">
    <transition name="showTips">
    <div class="news">
        {{tips}}
    </div>
    </transition>
</template>
<script>
    import {Bus} from "../bus.js";
    export default {
        data(){
            return{
                tips:""
            }
        }
    }
</script>

<style lang="css">
    .news{
        width: 80vw;
        height: 50px;
        line-height: 50px;
        font-size: 16px;
        text-align: center;
        color: white;
        border-radius: 0 0 10px 10px;
        background: rgba(0, 0, 0, .5);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: 999;
        margin: auto;
    }
    .showTips-fade-enter-active {
        transition: all .3s ease;
    }
    .showTips-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .showTips-fade-enter, .slide-fade-leave-to{
        transform: translateY(-10px);
        opacity: 0;
    }


</style>