<template>
    <div class="my-canvas">
        <div class="menues">
            <div @click="mirror">镜像</div>
            <div @click="film">胶卷</div>
            <div @click="fudiao">浮雕</div>
        </div>
        <canvas ref="canvas" height="400" width="600"></canvas>
        <img style="display:none" ref='img' src="../static/a.png" @load="imgOnload"/>
    </div>
</template>
<script>
export default {
    name: 'my-canvas3',
    computed: {
        canvas(){
            return this.$refs.canvas
        },
        img(){
            return this.$refs.img
        },
        ctx(){
            return this.canvas.getContext('2d')
        },
        imgData(){
            return this.ctx.getImageData(0,0, this.img.width, this.img.height);
        }
    },
    mounted(){
    },
    methods: {
        imgOnload(){
            this.ctx.drawImage(this.img,0,0);

        },
        mirror(){
            let width = this.img.width, height = this.img.height;
            let data = this.imgData.data;
            this.ctx.clearRect(width+20,0,this.canvas.width,this.canvas.height);
            let imgDataBuf = this.ctx.createImageData(width,height);
            for(let i=0; i<height; i++){
                for(let j=0; j<width*4; j+=4){
                    imgDataBuf.data[i*4*width +j +0] = data[i*4*width +(width-1)*4-j +0];
                    imgDataBuf.data[i*4*width +j +1] = data[i*4*width +(width-1)*4-j +1];;
                    imgDataBuf.data[i*4*width +j +2] = data[i*4*width +(width-1)*4-j +2];;
                    imgDataBuf.data[i*4*width +j +3] = data[i*4*width +(width-1)*4-j +3];;
                }
            }
            this.ctx.putImageData(imgDataBuf,this.img.width+20,0);
        },
        film(){
            let data = this.imgData.data;
            this.ctx.clearRect(this.img.width+20,0,this.canvas.width,this.canvas.height);
            let imgDataBuf = this.ctx.createImageData(this.img.width,this.img.height);
            for(let i=0; i<this.imgData.data.length; i+=4){
                imgDataBuf.data[i+0] = Math.abs(255-data[i+0])%255;
                imgDataBuf.data[i+1] = Math.abs(255-data[i+1])%255;
                imgDataBuf.data[i+2] = Math.abs(255-data[i+2])%255;
                imgDataBuf.data[i+3] = data[i+3];
            }
            this.ctx.putImageData(imgDataBuf,this.img.width+20,0);
        },
        fudiao(){
            let width = this.img.width, height =this.img.height;
            this.ctx.clearRect(width+20,0,width,height);
            let tempCanvasData = this.imgData.data;
            let imgDataBuf = this.ctx.createImageData(width, height);
            for ( let x = 1; x < width-1; x++) {    
                for ( let y = 1; y < height-1; y++) {    
                     //当前像素数点
                    let idx = (x + y * width) * 4; 
                    //上一行对应的像素点      
                    let bidx = ((x-1) + y * width) * 4;
                    //下一行对应的像素点
                    let aidx = ((x+1) + y * width) * 4;

                    //计算当前像素点的rgb的值
                    let nr = tempCanvasData[aidx + 0] - tempCanvasData[bidx + 0] + 128;
                    let ng = tempCanvasData[aidx + 1] - tempCanvasData[bidx + 1] + 128;
                    let nb = tempCanvasData[aidx + 2] - tempCanvasData[bidx + 2] + 128;
                    nr = (nr < 0) ? 0 : ((nr >255) ? 255 : nr);
                    ng = (ng < 0) ? 0 : ((ng >255) ? 255 : ng);
                    nb = (nb < 0) ? 0 : ((nb >255) ? 255 : nb);

                    imgDataBuf.data[idx + 0] = nr;  
                    imgDataBuf.data[idx + 1] = ng;     
                    imgDataBuf.data[idx + 2] = nb; 
                    imgDataBuf.data[idx + 3] = 255;     
                }
            }
            this.ctx.putImageData(imgDataBuf,this.img.width+20,0);
        }
    }
}
</script>
<style lang="less" scoped>
    .menues{
        div{
            cursor: pointer;
            margin: 10px;
            &:hover{
                background: #ccc;
            }
        }
    }
</style>


