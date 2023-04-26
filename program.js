//Salvador Medina-Ruiz COSC 341
//Problem 1
function factors(x){
    var factorsString = "" //Creates an empty string for the factors
    for (var i = 1; i <= x; i++){ //Goes through a loop from beginning of i to x
        if (x % i == 0){ //If x is evenly divided by i with no remainder
            factorsString = factorsString + i + ", "; //Append i to factorsString and add a , at the end
        }
    }
    return factorsString //Return factorsString
}
//Problem 2
function tax(income, status){
    var taxAmount = 0; //Creates empty taxAmount variable
    if (status.toUpperCase() == "SINGLE" && income < 30000){ //Converts status string to upper case and compares that SINLGE string. Also checks if income is less than 30000
        taxAmount = income * .20; //If both check out, taxAmount equals income multiplied by tax rate of 20%, or decimal .20
    }
    else if (status.toUpperCase() == "SINGLE" && income >= 30000){ //The rest of these 3 else if statements do the same thing but with different statuses, incomes, and computes different taxAmounts with different tax rates.
        taxAmount = income * .25;
    }
    else if (status.toUpperCase() == "MARRIED" && income < 50000){
        taxAmount = income * .10;
    }
    else if (status.toUpperCase() == "MARRIED" && income >= 50000){
        taxAmount = income * .15;
    }
    return taxAmount; //Returns the taxAmount
}
//Problem 3
function stdDev (arrayNums){
    var standardDeviation = 0; //Creates standardDeviation
    var averageOfNums = 0; //Creates averageOfNums
    var sum = 0; //Creates sum
    for (value of arrayNums){ //Goes through each value in the array arrayNums
        averageOfNums += value; //Adds each value from the array to averageOfNums to get average
    }
    averageOfNums = averageOfNums / arrayNums.length; //averageOfNums equals averageOfNums divided by number of values in arrayNums
    for (value of arrayNums){ //Goes through each value in the array arrayNums
        sum += (value - averageOfNums)**2; //each value from the array subtracts the averageOfNums which is then squared. Each instance of this is added into sum
    }
    standardDeviation = Math.sqrt(sum / arrayNums.length) //Square roots the sum divided by the number of values in arrayNums. Puts it into standardDeviation
    return standardDeviation; //returns standardDeviation
}
//Problem 4
function createIdPassword(last, first){
    var id = ""; //Creates empty id string
    var password = ""; //Creates empty password string
    var firstUpperCase = first.toUpperCase(); //Converts first name to all upper case letters and puts it into firstUpperCase
    var lastUpperCase = last.toUpperCase(); //Converts last name to all upper case letters and puts it into lastUpperCase
    var arrayIDPass = []; //Creates empty arrayIDPass

    id = id + firstUpperCase.charAt(0) + lastUpperCase; //Appends empty id string with first letter of first name and the entire last name
    password = password + firstUpperCase.charAt(0) + firstUpperCase.charAt(firstUpperCase.length-1) + lastUpperCase.substring(0, 3) + firstUpperCase.length + lastUpperCase.length; //Appends empty password string to first letter of the first name followed by the last letter of the first name followed by the first three letters of the last name followed by the length of the first name followed by the length of the last name.
    arrayIDPass = id + " " + password; //Appends both the id and password together to arrayIDPass which are seperated by a space for readability.
    return arrayIDPass; //returns arrayIDPass
}
//Problem 5
function removeDuplicates(arrayStrings){
    copyArray = []; //Creates empty copyArray
    dupeFreeArray = []; //Creates empty dupeFreeArray
    copyArray = copyArray.concat(arrayStrings); //Essentially copies arrayStrings into copyArray
    for (value in copyArray){ //Goes through each value in the array arrayStrings
        if (dupeFreeArray.indexOf(copyArray[value]) == -1){ //Checks to see if the value in copyArray is in dupeFreeArray. If it's not (equals -1), then pushes it into dupeFreeArray
            dupeFreeArray.push(copyArray[value]); //Pushes the value from copyArray into dupeFreeArray
        }
    }
    return dupeFreeArray; //Return dupeFreeArray
}
//Problem 6
class Student{
    constructor(name, gpa){ //Standard constructor for the class
        this.name = name; //Sets data member this.name to the name provided by the constructor parameters
        this.gpa = gpa; //Sets data member this.gpa to the gpa provided by the constructor parameters
    }

    getName (){
        return this.name; //Returns this.name
    }

    getGpa(){
        return this.gpa; //Return this.gpa
    }

    setName(newName){
        this.name = newName; //Sets data member this.name to the name provided by the method parameters
    }

    setGpa(newGpa){
        this.gpa = newGpa; //Sets data member this.gpa to the gpa provided by the method parameters
    }

    isHonors(){
        if (this.gpa >= 3){ //Checks if this.gpa is greater than or equal to 3
            return true; //If so, return true
        }
        else{
            return false; //Else, return false
        }
    }
}