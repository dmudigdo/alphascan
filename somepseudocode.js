
var highlight = function() {
//    unhighlight currently highlighted row:
//        get the class = 'highlighted'
//        make the class =  

    var x = document.getElementById('highlighted');
    x.id = 'row' + prevrow;


//    highlight current row:
//        get the class =  'row' + currow
//        make that class = 'highlighted'

    var y = document.getElementById('row' + currow);
    y.id = 'highlighted';

    currrow++;
    if (currow == 5) then { currow = 1 };
    prevrow++;
    if (prevrow == 5) then { prevrow = 1 };
};

// MAIN

// Start with row 5 (last row) already highlighted in the table

currrow = 1;
prevrow = 5;

var intervalId = setInterval(highlight(),2000);    