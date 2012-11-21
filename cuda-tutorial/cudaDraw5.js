/* 
 * tender 0.1.0
 * cudaDraw.js
 * onesuper -- under MIT license 
 */



function cudaDrawProc5(p) {
    p.setup = function() {
        p.size(800, 600);
        p.blockDim_x = 2;
        p.blockDim_y = 2;
        p.gridDim_x = 2;
        p.gridDim_y = 2;
        p.threadIdx_x = 0;
        p.threadIdx_y = 0;
        p.blockIdx_x = 0;
        p.blockIdx_y = 0;
        p.u = 0;
        p.v = 0;
        p.i = 0;;
        p.N = 17;
        p.noLoop();
    }

    p.draw = function() {
        /*
         * calculate the drawing size of blocks and grids
         * the distance between two grids is 30
         */
        var blockWidth = 10 * p.blockDim_x;
        var blockHeight = 10 * p.blockDim_y;
        var gridWidth = (30 + blockWidth) * p.gridDim_x;
        var gridHeight = (30 + blockHeight) * p.gridDim_y;
        var arrayWidth = 10 * p.N;
        var arrayHeight = 10 * p.N;

        p.size(gridWidth + (arrayWidth+30)*3 + 30, arrayHeight+50);
        p.background(255);
        for(var n=0; n<p.gridDim_y; n++) {
            for(var m=0; m<p.gridDim_x; m++)
            {
                for(var j=0; j<p.blockDim_y; j++)
                {
                    var startPosition_x = blockWidth*m + 30*m;
                    var startPosition_y = blockHeight*n + 30*n;
                    for(var i=0; i<p.blockDim_x; i++)
                    {
                        p.fill(127, 224, 134);
                        p.rect(10*i + startPosition_x, 10*j + startPosition_y, 10, 10);
                    }
                }
            }
        }
        p.fill(230, 100, 134);
        p.rect(p.threadIdx_x*10 + p.blockIdx_x*(blockWidth+30),
               p.threadIdx_y*10 + p.blockIdx_y*(blockHeight+30), 10, 10);
     


       for(var n=0; n<3; n++) {
            var startPosition_x = arrayWidth*n+30*n + gridWidth + 30; 
            for(var j=0; j<p.N; j++)
            {         
                for(var i=0; i<p.N; i++)
                {
                    p.fill(222, 210, 16);
                    p.rect(10*i + startPosition_x, 10*j, 10, 10);
                }
            }
            
        }

        var startPosition_x = arrayWidth*n+30*n + gridWidth + 30; 
               
        //draw a row 
        var row = p.threadIdx_y + p.blockDim_y * p.blockIdx_y + p.v * p.blockDim_y * p. gridDim_y;
        p.fill(230, 100, 134);
        p.rect(gridWidth+30, row*10, 10*p.N, 10);
        p.fill(1);
        p.ellipse(gridWidth+30+10*p.i+5, row*10+5, 10, 10);
        

        //draw a col
        var col = p.threadIdx_x + p.blockDim_x * p.blockIdx_x + p.u * p.blockDim_x * p.gridDim_x;
        p.fill(230, 100, 134);
        p.rect(gridWidth + 60 + arrayWidth + col*10, 0, 10, 10*p.N);
        p.fill(1);
        p.ellipse(gridWidth+60+arrayWidth+col*10+5,10*p.i+5, 10, 10);
   
        //draw a element
        p.fill(230, 100, 134);
        p.rect(gridWidth + 90 + arrayWidth*2 + col*10, row*10, 10, 10);
    }
}

function changeAttributes3(blockIdx_x, blockIdx_y,
                           threadIdx_x, threadIdx_y, i, u, v) {
    var p = Processing.getInstanceById("canvas5");
    p.blockIdx_x = blockIdx_x;
    p.blockIdx_y = blockIdx_y;
    p.threadIdx_x = threadIdx_x;
    p.threadIdx_y = threadIdx_y;
    p.i = i;
    p.u = u;
    p.v = v;
    p.redraw();
}


