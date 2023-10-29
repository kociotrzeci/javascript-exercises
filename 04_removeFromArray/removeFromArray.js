const removeFromArray = function(array,...itemsToDelete) {
    for(let i = itemsToDelete.length-1; i >= 0; i--)
    {   
        for(let j = array.length-1; j>=0; j--)
        {
            if(array[j]===itemsToDelete[i]) 
            {
                array.splice(j,1);
                break;
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
