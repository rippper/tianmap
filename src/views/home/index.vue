<template>
    <div>
        <div class="app">
        <div class="app-list">
            <transition-group class="app-package" :name="transitionName">
                <div class="app-item" :class="{ 'app-bg': i % 2 == 1}" v-for="i in 10" :key="i" v-show="i == appIndex"></div>
            </transition-group>
        </div>
        </div>
        <div @click="indexadd">点击</div>
        <div @click="indexreduce">点击减</div>
        <div class="app-progress">
            <lifangti></lifangti>
        </div>
        <router-link to="/map">去地图</router-link>
    </div>
</template>

<script>
import lifangti from '@/components/lifangti.vue'
export default {
    name: 'home',
    components: {
        lifangti
    },
    data() {
        return {
            appIndex: 1,
            transitionName: 'throwtop'
        }
    },
    methods:{
        indexadd() {
            console.log(this.appIndex)
            this.transitionName = 'throwtop'
            this.appIndex = this.appIndex + 1
        },
        indexreduce() {
            this.transitionName = 'throwbottom'
            this.appIndex = this.appIndex - 1
        }
    }
}
</script>

<style lang="scss" scoped>
ul{
  list-style: none;
}
.app{
  width: 400px;
  height: 180px;
  overflow: hidden;
  .app-list{
    width: 400px;
    height: 180px;
    transform-style:preserve-3d;
    transform: perspective(1000px);
    .app-item{
      width: 400px;
      height: 180px;
      background: rgb(0,255,0);
    }
    .app-bg{
      background: rgb(255,0,0);
    }
  }
}
.app-progress{
  width: 200px;
  height: 17px;
}
.throwtop-enter-active{
  animation: throwtop-in 1s;
}
.throwtop-leave-active{
  animation: throwtop-out 1s;
}
@keyframes throwtop-in {
  0% {
    transform: translateY(10px) translateZ(0px);
  }
  25% {
    transform: translateY(10px) translateZ(-200px);
  }
  75% {
    transform: translateY(-180px) translateZ(-200px);
  }
  100% {
    transform: translateY(-180px) translateZ(0px);
  }
}
@keyframes throwtop-out {
  0%{
    transform: translateY(0) translateZ(0);
  }
  25%{
    transform: translateY(0) translateZ(-200px);
  }
  75%{
    transform: translateY(-190px) translateZ(-200px);
  }
  100%{
    transform: translateY(-190px) translateZ(0);
  }
}
.throwbottom-enter-active{
  animation: throwbottom-in 1s;
}
.throwbottom-leave-active{
  animation: throwbottom-out 1s;
}
@keyframes throwbottom-in{
  0%{
    transform: translateY(-190px) translateZ(0);
  }
  25%{
    transform: translateY(-190px) translateZ(-200px);
  }
  75%{
    transform: translateY(0px) translateZ(-200px);
  }
  100%{
    transform: translateY(0px) translateZ(0);
  }
}
@keyframes throwbottom-out{
  0%{
    transform: translateY(-180px) translateZ(0);
  }
  25%{
    transform: translateY(-180px) translateZ(-200px);
  }
  75%{
    transform: translateY(10px) translateZ(-200px);
  }
  100%{
    transform: translateY(10px) translateZ(0)
  }
}
</style>