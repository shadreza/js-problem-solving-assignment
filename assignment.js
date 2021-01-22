//https://github.com/shadreza/js-problem-solving-assignment




function kilometerToMeter(inputKilometer){
    // As distance must be non negative so if distance < 0 then that is one corner case to handle
    if(inputKilometer<0){
        return "Distance Can not be Negative!";
    }
    // As non negative input the output will be multiplied by 1000 as 1 Kilometer = 1000 meter
    return 1000*inputKilometer;
}




function budgetCalculator(numberOfWatches,numberOfPhones,numberOfLaptops){
    // The Total Budget is denoted as totalCost and initialized as 0 as nothing is bought
    var totalCost=0;
    if(numberOfWatches<0){
        // As number of bought products can not be negative thats a catch
        console.log("Number Of Watches Can not be negative!");
    }
    else{
        // Adding up to the totalCost as the input is non negative
        // Price of the watches are 50 unit
        totalCost+=(numberOfWatches*50);
    }
    if(numberOfPhones<0){
        // As number of bought products can not be negative thats a catch
        console.log("Number Of Phones Can not be negative!");
    }
    else{
        // Adding up to the totalCost as the input is non negative
        // Price of the phones are 100 unit
        totalCost+=(numberOfPhones*100);
    }
    if(numberOfLaptops<0){
        // As number of bought products can not be negative thats a catch
        console.log("Number Of Laptops Can not be negative!");
    }
    else{
        // Adding up to the totalCost as the input is non negative
        // Price of the laptops are 500 unit
        totalCost+=(numberOfLaptops*500);
    }
    if(totalCost<0){
        // If all the inputs are negative then there will be no bugget
        return "As The Given Inputs are all negative so no Budget needed!";
    }
    else{
        // If the budget is 0 or more then it will return that ammount
        return totalCost;
    }
}




function hotelCost(inputDays){
    // Initializing the total bill as totalCost as totalHotelCost as 0
    var totalHotelCost=0;
    // If the input days are more than 0 then we will have to make the bill
    if(inputDays>=0){
        if(inputDays>10){
            // If the input days are more than 10 days then for the first 10 days 100 taka and the remaining days are now in inputDays
            totalHotelCost+=10*100;
            inputDays-=10;
        }
        else{
            // If the input days are not more than 10 days then for the first 10 days 100 taka and the remaining days are now 0
            totalHotelCost+=inputDays*100;
            inputDays-=inputDays;
        }
    }
    // If the input days are negative then the input is not valid
    else{
        return "No Bill Because the input is not valid!";
    }
    // If more days are there to be stayed (mnore than 10 days ie. input was 15 or 25 or 100)
    if(inputDays>0){
        if(inputDays>10){
            // For the second 10 days the cost is 80 and if there are more then 10 days remaining then inputDays are now renewed
            totalHotelCost+=10*80;
            inputDays-=10;
        }
        else{
            // The remaining days will get their bill added as 80 per day
            totalHotelCost+=inputDays*80;
            inputDays-=inputDays;
        }
    }
    if(inputDays>0){
        // For the last remaining days (more than 20 days the bill will be 50 per day)
        totalHotelCost+=inputDays*50;
    }
    // returning the total bill
    return totalHotelCost;
}




function megaFriend(friendArray){
    if(typeof friendArray!="undefined" && friendArray!=null && friendArray.length>0){
        // If The array is nonempty then in this loop
        if(friendArray.length==1){
            // If the array has only one element then that element will be the largest string
            return friendArray[0];
        }
        else{
            // As there are many elements in the array so for the first case we are thinking that the first one is the largest string as we are taking that first index as 0 in indexOfLargestString abd taking the length in lengthOfLargestString
            let indexOfLargestString=0;
            let lengthOfLargestString=friendArray[0].length;
            // If there are more than one elements or strings that have the maximum string length , then how many strings are there initializing as 0 in largestLengthStringCount
            let largestLengthStringCount=0;
            // In the for loop we will treverse through the second element onwards and if we see that the treversing element has a larger string length then both the index and the string length variables will be updated
            for(let i=1;i<friendArray.length;i++){
                if(friendArray[i].length>lengthOfLargestString){
                    largestLengthStringCount=0;
                    lengthOfLargestString=friendArray[i].length;
                    indexOfLargestString=i;
                }
                else if(friendArray[i].length==lengthOfLargestString){
                    // If there are more than strings having the largest counted length till now then we will increment the counter
                    largestLengthStringCount++;
                }
            }
            // Special msg if there are more than one strings having the largest length
            if(largestLengthStringCount>0){
                console.log("There Are " + largestLengthStringCount + " more strings having the Largest String Length but returning the first one!");
            }
            // Returning the largest string of the array
            return friendArray[indexOfLargestString];
        }
    }
    else{
        return "Empty Array!";
    }
}
