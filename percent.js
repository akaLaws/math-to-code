// Examples of math translated to JavaScript
// Math samples are taken from "Matematik F-C niveau by Dorthe Worm"

// CALCULATING PERCENTAGE

// the result equal to
//     The part
//     Divided by
//     The full amount
//     

//     The result of above
//     Multiplied by
//     Ten (if you want the part percentage of the full amount)
//     or
//     Thousand (if you want the part promille of the full amount)

// Centi is by definition the hundred part of one       => 0.01
// Promille is by definition the thousand part of one   => 0.001


const hundred = 100;
const thousand = 1000;

// Functions for calculating the amount of a specific percentage (part) of a full amount

function resultPercentage(part, fullAmount){
    const centi = part/fullAmount;

    return centi*hundred;
}


function resultPromille(part, fullAmount){
    const promille = part / fullAmount;

    return promille*thousand;
}

// Example : I want to know what eight percent of thirtysix are

// Method: 
//  eight divided by thirtysix                  =>      8 / 36
//  equals to zero point twentytwo              =>    = 0.22

//  zero point twentytwo multiplied by hundred  =>      0.22 * 100
//  equals to twentitwo percent                 =>    = 22 %


