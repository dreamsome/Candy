/* 
 * tender 0.1.0
 * cudaDraw.js
 * onesuper -- under MIT license 
 */



function cudaDrawProc0(p) {
    p.setup = function() {
        p.size(800, 600);
        p.N = 15;
    }

    p.draw = function() {
        /*
         * calculate the drawing size of blocks and grids
         * the distance between two grids is 30
         */
        
        var arrayWidth = 10*p.N;
        var arrayHeight = 10*p.N;

        p.size((arrayWidth+30)*3, arrayHeight+10);
        p.background(255);
        for(var n=0; n<3; n++) {
            var startPosition_x = arrayWidth*n+30*n; 
            for(var j=0; j<p.N; j++)
            {         
                for(var i=0; i<p.N; i++)
                {
                    p.fill(222, 210, 16);
                    p.rect(10*i + startPosition_x, 10*j, 10, 10);
                }
            }
            
        }
    }
}


function changeAttributes0(N) {
    var p = Processing.getInstanceById("canvas0");
    p.N = N;
}


