// first problem's solution:
function kilometerToMeter(kilometerValue){
    // condition for justifying whether distance value is valid or not
    if(kilometerValue > 0){
            return kilometerValue*1000;
    }
    else{
        return "distance cannot be negative";
    }
}
var meterValue = kilometerToMeter(12);
console.log(meterValue);


//second problem's solution:

function budgetCalculator(watch, mobile, laptop){
    // per item price
    var watchPrice = 50;
    var mobilePrice = 100;
    var laptopPrice = 500;
    // total individual item price
    var totalWatchPrice = watch*watchPrice;
    var totalMobilePrice = mobile*mobilePrice;
    var totalLaptopPrice = laptop*laptopPrice;
    // total cost
    var totalPrice = totalWatchPrice + totalMobilePrice + totalLaptopPrice;

    // return the totalPrice
    return totalPrice;
}

var totalCost = budgetCalculator(5,3,2);
console.log(totalCost);


//third problem's solution:
function hotelCost(days){
    // initially cost is counted 0
   var cost = 0;
   // condition for checking the value of days it's valid or not
   if(days<0){
       return "Days cannot be negative"
   }
   // condition for first 10 nights
   else if(days<=10){
       cost = days*100;
   }
   // condition for second 10 nights
   else if(days<=20){
       var firstTenNights = 10*100;
       var remainedDays = days - 10;
       var secondTenNights = remainedDays*80;
       cost = firstTenNights + secondTenNights;
   }
   // condition for rest of the nights after 20 nights
   else{
       firstTenNights = 10*100;
       secondTenNights = 10*80;
       remainedDays = days - 20;
       var thirdTenNights = remainedDays*50;
       cost = firstTenNights + secondTenNights + thirdTenNights;
   }
   // return the totalCost
   return cost;
}

var totalCost= hotelCost(23);
console.log(totalCost);


//fourth problem's solution:

var names = ['asif','saleh','Rukshana','muttakimmus','ashrafulISLAM'];
function megaFriend(names){
    // initiate longestName in an empty string
    var longestName = "";
    //  create the for loop
    for(var i=0;i<names.length;i++){
        var char = names[i];
        // condition for comparing the length of char with longestName for execution
        if(char.length > longestName.length){
            longestName = char;
        }
    }
    // return the longestName
    return longestName;
}

var checkLongestName = megaFriend(names);
console.log(checkLongestName);



