<template>
    <div class="my-canvas">
        <canvas ref="canvas" height="400" width="600"></canvas>
    </div>
</template>
<script>
export default {
    name: 'my-canvas1',
    mounted(){
        let canvas = this.$refs.canvas;
        let ctx = canvas.getContext("2d");

        // ctx.textBaseline="top";
        // ctx.textAlign="center"
        ctx.fillText("hello canvas", 0,0);
        ctx.strokeText("Hello World!",100,50);
        ctx.lineWidth = 1;
        ctx.font="30px Arial" ;
        ctx.fillStyle="#FF0000";
        ctx.fillText("你好", 100,200);
        ctx.strokeText("你好", 100,250);
    }
}
</script>
<style lang="less" scoped>
    
</style>


