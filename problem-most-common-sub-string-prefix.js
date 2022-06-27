var longestCommonPrefix = function(strs) {
    for (let index = 1; index < strs.length; index++) {
        console.log({index})
            while (strs[index].indexOf(strs[0]) != 0) {
                console.log({len: strs[0].length})
                if (strs[0].length == 0) {
                    return "";
                }
                strs[0] = strs[0].substring(0, strs[0].length - 1);
            }
        }
    return strs[0];
};
