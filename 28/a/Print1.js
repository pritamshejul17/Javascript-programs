

/*
for this pattern
    *
    * *
    * * *
*/

console.log(`First Pattern output
`);

var num = 3;

var str = `*`;

for(let i = 0; i < num; i++){
    var str = "";
    for(let j = 0; j <= i; j++){
        str += "* "
    }
    console.log(str);
}

/*
    * * *
    * * *
    * * *
*/
console.log(`Second Pattern Output
`)
var num = 3;

var str = `*`;

for(let i = 0; i < num; i++){
    var str = "";
    for(let j = 0; j < num; j++){
        str += "* "
    }
    console.log(str);
}

/*

For Pyramid Pattern

         *
       * * *
     * * * * *

*/

console.log(`Third Pattern Output
`);

var num = 7;

var left,right;

left = right = (num *2)/2; 


for(let i = 0; i < num*2; i++){
    var str = "";
    for( j = 0; j < num*2; j++){
        
        if( j >= left && j <= right && left<=right)
            process.stdout.write("*");
        else
            process.stdout.write(" ");
    }
    left--;
    right++;
    if(left < 0 || right >= num*2)
        break;
    console.log(``)
}





