
/**
 * Essentially selecting a uniformly random item from a selection too large to store in memory.
 * 
 * I don't plan on spending much time here, but I will layout my idea for this below. 
 * We need to assume we have the length of the dataset and we have an assumed upperLimit for what we can hold in memory. 
 * 
 * I think I can just "randomly" select a section that is LTE my upperLimit.
 * After I have my group, I can randomly select an element.  
 */
let hello = "Only putting this here so the jsdocs comments work properly :P"

/**
 * 
 * @param {number} upperLimit 
 * @param {number} setSize 
 */
function uniformProb(upperLimit, setSize) {
    let cohortCount = Math.floor(setSize / upperLimit);

    let selectedCohort = Math.floor(Math.random() * cohortCount);

    let selectedUnit = Math.floor(Math.random() * (upperLimit * selectedCohort));

    return selectedUnit;
}


console.log(uniformProb(100, 10000))