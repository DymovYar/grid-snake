export function comparePositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y;
}

export function prefixNumber(num, length) {
    let str = num.toString();
    
    while (str.length < length) {
        str = '0' + str;
    }
    
    return str;
} 