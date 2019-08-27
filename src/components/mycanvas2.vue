<template>
    <div class="my-canvas">
        <canvas ref="canvas" height="400" width="600"></canvas>
    </div>
</template>
<script>
export default {
    name: "my-canvas2",
    mounted() {
        let canvas = this.$refs.canvas;
        let ctx = canvas.getContext("2d");
        ctx.lineWidth = 10;

        ctx.beginPath();
        ctx.moveTo(50,50);
        ctx.lineTo(100,50);
        ctx.strokeStyle = 'red';
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(50,100);
        ctx.lineTo(100,100);
        ctx.strokeStyle = 'yellow';
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(50,150);
        ctx.lineTo(100,150);
        ctx.strokeStyle = 'blue';
        ctx.stroke();
        ctx.save();
        // ctx.clearRect(0,0,canvas.width,canvas.height);
        // ctx.restore();
        // ctx.stroke();




    }
}
</script>
<style lang="less" scoped>

</style>


