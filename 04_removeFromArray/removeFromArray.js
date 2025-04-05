const removeFromArray = function(array_, ...args) {
    let new_array = [];
    for (i = 0; i < array_.length; i++){
        let remove = false;
        for (z = 0; z < args.length; z++){
            if (array_[i] === args[z]){
                remove = true;
                break;
            }
        }    
        if (!remove){
            new_array.push(array_[i]);
        }
    }
    return new_array;
    }

// Do not edit below this line
module.exports = removeFromArray;
