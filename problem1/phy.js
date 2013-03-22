
var paper = Raphael(document.getElementById("circuit"), 400, 220);



var j = 1.73205;




paper.path(['M', 200-100, 10+100*j, 'L', 200+100, 10+100*j, 'L', 200, 10, 'L', 200-100, 10+100*j].join(' ')).attr("stroke", '#AAAAAA');
var A = paper.circle(200, 10, 5).attr({"fill":"#3EC9F7", "stroke-color":"#3EC9F7"});
var B = paper.circle(200+100, 10+100*j, 5).attr({"fill":"#3EC9F7", "stroke-color":"#3EC9F7"});
var C = paper.circle(200-100, 10+100*j, 5).attr({"fill":"#3EC9F7", "stroke-color":"3EC9F7"});



paper.path(["M", 200-100, 10+100*j, 'L', 200-100+30, 10+100*j].join(' ')).attr({"stroke": 'blue', "arrow-end":"block-wide-long"});
paper.path(["M", 200+100, 10+100*j, 'L', 200+100-15, 10+100*j].join(' ')).attr({"stroke": 'blue', "arrow-end":"block-wide-long"});
paper.path(["M", 200+100, 10+100*j, 'L', 200+100, 10+100*j-26].join(' ')).attr({"stroke": 'blue', "arrow-end":"block-wide-long"});

function change(v) {
    paper.clear();


    var y = 0;
    var x = 0;
    
    paper.path(['M', 200-100+x, 10+100*j-y, 'L', 200+100-(x/2+y/2*j), 10+100*j-(x*j/2-y/2), 'L', 200-(x/2-y/2*j), 10+(x*j/2+y/2), 'L', 200-100+x, 10+100*j-y].join(' ')).attr("stroke", '#111111');
    



    var r = v;
    y = r*r/200*j/2;
    x = Math.sqrt(r*r-y*y);

    paper.path(["M", 200-100+x, 10+100*j-y, 'L', 100, 10+100*j].join(' ')).attr("stroke", 'red');

    paper.path(['M', 200-100+x, 10+100*j-y, 'L', 200+100-(x/2+y/2*j), 10+100*j-(x*j/2-y/2), 'L', 200-(x/2-y/2*j), 10+(x*j/2+y/2), 'L', 200-100+x, 10+100*j-y].join(' ')).attr("stroke", '#CCCCCC');
    paper.circle(200-100+x, 10+100*j-y, 5).attr({"fill":"#3EC9F7", "stroke-color":"3EC9F7"});//c
    paper.circle(200+100-(x/2+y/2*j), 10+100*j-(x*j/2-y/2), 5).attr({"fill":"#3EC9F7", "stroke-color":"#3EC9F7"}); //b
    paper.circle(200-(x/2-y/2*j), 10+(x*j/2+y/2), 5).attr({"fill":"#3EC9F7", "stroke-color":"#3EC9F7"});//a


    paper.path(["M", 200-100+x, 10+100*j-y, 'L', 200-100+x+30*x/r, 10+100*j-y-30*y/r].join(' ')).attr({"stroke": 'blue', "arrow-end":"block-wide-long"});

    paper.path(["M", 200+100-(x/2+y/2*j), 10+100*j-(x*j/2-y/2), 'L', 200+100-(x/2+y/2*j)-15*x/r, 10+100*j-(x*j/2-y/2)+15*y/r].join(' ')).attr({"stroke": 'blue', "arrow-end":"block-wide-long"});

    paper.path(["M", 200+100-(x/2+y/2*j), 10+100*j-(x*j/2-y/2), 'L', 200+100-(x/2+y/2*j)-26*y/r, 10+100*j-(x*j/2-y/2)-26*x/r].join(' ')).attr({"stroke": 'blue', "arrow-end":"block-wide-long"});

} 
