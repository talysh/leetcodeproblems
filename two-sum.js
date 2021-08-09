// Given an array of "nums" and integer "k", find two elements in the array such that their sum is is equal to k, and return their indeces. There is only such pair that exists. 

// nums = [3, 5, 7, 1, 8] k=9 answer=[3,4]


const twoSum = (nums, k) => {

    let numberMap = {};

    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const complement = k - currentNum;

        if (numberMap.hasOwnProperty(complement))
            return [i, numberMap[complement]];
        else numberMap[currentNum] = i;
    }

    return -1;
}


console.log(twoSum([1, 2, 2, 4], 6));