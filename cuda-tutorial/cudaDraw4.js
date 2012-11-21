/* 
 * tender 0.1.0
 * cudaDraw.js
 * onesuper -- under MIT license 
 */



function cudaDrawProc4(p) {
    p.setup = function() {
        p.size(800, 600);
        p.blockDim_x = 1;
        p.blockDim_y = 16;
        p.gridDim_x = 16;
        p.gridDim_y = 1;
        p.threadIdx_x = 0;
        p.threadIdx_y = 0;
        p.blockIdx_x = 0;
        p.blockIdx_y = 0;
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

        p.size(gridWidth, gridHeight);
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
        //p.rect(p.threadIdx_x*10 + p.blockIdx_x*(blockWidth+30),
        //       p.threadIdx_y*10 + p.blockIdx_y*(blockHeight+30), 10, 10);
        
    }
}
