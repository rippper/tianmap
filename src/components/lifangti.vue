<template>
    <div class="progress">
        <div class="pg-outsizebox">
            <div class="pg-ob-top"></div>
            <div class="pg-ob-front"></div>
            <div class="pg-ob-right"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Progress',
}
</script>

<style lang="scss">
.progress{
    width: 100%;
    height: 18px;
    transform: perspective(1000px);
    position: relative;
    .pg-outsizebox{
        width: 100%;
        height: 18px;
        margin: auto;
        transform-style: preserve-3d;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        .pg-ob-top{
            width: 100%;
            height: 18px;
            transform: skewX(-35deg)rotateX(75deg) scaleY(2);
            background: linear-gradient(
                to top,
                rgba(42, 156, 255, 1),
                rgba(42, 156, 255, 0)
            );
            position: absolute;
            top: 0;
            left: 0
        }
        .pg-ob-front{
            width: 100%;
            height: 6px;
            transform: translate3d(-3px, 13px, 0);
            background: rgb(42, 156, 255);
            position: absolute;
            top: 0;
            left: 0;
        }
        .pg-ob-right{
            width: 18px;
            height: 6px;
            transform: translateX(10px) translateY(-1px) rotateX(15deg) rotateY(-77deg) scaleX(2);
            background: linear-gradient(
                to right,
                rgba(42, 156, 255, 1),
                rgba(42, 156, 255, 0)
            );
            position: absolute;
            top: 50%;
            right: 0;
        }
    }
}
</style>