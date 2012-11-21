
function setUpTangle () {
    var canvas0 = document.getElementById("canvas0");
    var canvas1 = document.getElementById("canvas1");
    var canvas2 = document.getElementById("canvas2");
    var canvas3 = document.getElementById("canvas3");
    var canvas4 = document.getElementById("canvas4");
    var canvas5 = document.getElementById("canvas5");

    var processing0 = new Processing(canvas0, cudaDrawProc0);
    var processing1 = new Processing(canvas1, cudaDrawProc1);
    var processing2 = new Processing(canvas2, cudaDrawProc2)
    var processing3 = new Processing(canvas3, cudaDrawProc3);
    var processing4 = new Processing(canvas4, cudaDrawProc4);
    var processing5 = new Processing(canvas5, cudaDrawProc5);
    

    var element0 = document.getElementById("array1");
    var tangle0 = new Tangle(element0, {
        initialize: function () {
            this.N = 15;
        },
        update: function () {
            changeAttributes0(this.N);
        }
    });


    var element1 = document.getElementById("cuda1");
    var tangle1 = new Tangle(element1, {
        initialize: function () {
            this.blockDim_x = 16;
            this.blockDim_y = 16;
            this.gridDim_x = 1;
            this.gridDim_y = 1;
        },
        update: function () {
            changeAttributes1(this.blockDim_x, this.blockDim_y, this.gridDim_x, this.gridDim_y)
        }
    });




    var element2 = document.getElementById("cuda2");
    var tangle2 = new Tangle(element2, {
        initialize: function () {
            this.threadIdx_x = 0;
            this.threadIdx_y = 0;
            this.blockIdx_x = 0;
            this.blockIdx_y = 0;
            this.blockDim_x = 4;
            this.blockDim_y = 4;
            this.gridDim_x = 4;
            this.gridDim_y = 4;
            this.offset = 0;
            this.i = 0;

        },
        update: function () {
            this.x = this.blockDim_x * this.blockIdx_x + this.threadIdx_x;
            this.y = this.blockDim_y * this.blockIdx_y + this.threadIdx_y;
            this.offset = this.x + this.y * this.blockDim_x * this.gridDim_x;
            changeAttributes2(this.blockIdx_x, this.blockIdx_y, this.threadIdx_x, this.threadIdx_y, this.i);
            
        }
    });


    var element3 = document.getElementById("cuda3");
    var tangle3 = new Tangle(element3, {
        initialize: function () {
            this.threadIdx_x = 0;
            this.threadIdx_y = 0;
            this.blockIdx_x = 0;
            this.blockIdx_y = 0;
            this.blockDim_x = 2;
            this.blockDim_y = 2;
            this.gridDim_x = 2;
            this.gridDim_y = 2;
            this.i = 0;
            this.u = 0;
            this.v = 0;

        },
        update: function () {
            this.x = this.blockDim_x * this.blockIdx_x + this.threadIdx_x + this.u * (this.gridDim_x * this.blockDim_x);
            this.y = this.blockDim_y * this.blockIdx_y + this.threadIdx_y + this.v * (this.gridDim_y * this.blockDim_y);
            changeAttributes3(this.blockIdx_x, this.blockIdx_y, this.threadIdx_x, this.threadIdx_y, this.i, this.u, this.v);
            
        }
    });
}