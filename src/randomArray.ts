function randomArray(length: number, floor: number, ceil: number): number[] {
    var array: number[] = [];
    for (var i = 0; i < length; i++)
    {
        array[i] = randomNumber(ceil,floor);
    } 
    return array;
}

function randomNumber(floor: number, ceil: number)
{
    return Math.floor(Math.random() * (ceil - floor)) + floor;
}