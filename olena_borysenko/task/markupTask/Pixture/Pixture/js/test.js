/**
 * Created by olena_borysenko on 3/15/2016.
 */
function pipeFix(numbers){
    var res  = [];
    for(var i=0; i<numbers.length; i++) {
        var current = numbers[i];
        var next = numbers[i+1];
        if( next - current == 1 || next == undefined) {
            res.push(current);
        } else {
            console.log("LL",current, next);
            while(next - current != 0) {
                console.log("LL",next - current);
                res.push(current);
                current++;
                if(current == 20) {
                    break;
                }
            }
        }
    }
    return res;
}
pipeFix([6,9]);
pipeFix([1,2,3,8])