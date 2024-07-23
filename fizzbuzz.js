var output =[];
var count = 0;
function fizzbuzz(){
   count=count+1
   
    if((count%3==0)){
       result = ("fizz");
            if((count%5==0)){
                 result = ("fizzbuzz");
            
        }
        
    }
    else if((count%5==0)){
        result = ("buzz");
    }
    else{
        result = (count);
    }
    output.push(result);

console.log(output);
    
}


