function evenChars(string) {
    var arrayFromString = string.split('');
    var lengthString = arrayFromString.length;
    var result = [];

    if(lengthString>=100 || lengthString<=1){
        return "invalid string";
    }
    for (var i=1; i<lengthString; i+=2) {
        result.push(arrayFromString[i]);
    }
    return result
}

evenChars('Lena');
evenChars('');

function evenChars(string) {
    var arrayFromString = string.split('');
    var lengthString = arrayFromString.length;

    if(lengthString>=100 || lengthString<=1){
        return "invalid string";
    }

    return arrayFromString.filter(function(elem, i){
        return i%2==0;
    });
}

evenChars('Lena');


function convert(time){
    var hours = time.getHours();
    var minute = time.getUTCMinutes();
    var second = time.getUTCSeconds();
    var millisecond = time.getUTCMilliseconds();


    function check(digit) {
        if(digit<10) {
            return "0" + digit;
        }
        return digit;
    }

    function checkMilisecond(digit) {
        if(digit<10) {return "00" + digit};
        if(digit<100) {return "0" + digit};
        return digit
    }
    return '' + check(hours) + ":" + check(minute) + ":" + check(second) + "," + checkMilisecond(millisecond);
}

function convert(time){
    var d = time;
    console.log(("0" + d.getHours()).slice(-2));
    console.log(("0" + d.getHours()));
    return ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2) + ":" + ("0" + d.getSeconds()).slice(-2) + "," + ("000" + d.getMilliseconds()).slice(-3);
}

convert(new Date(2016, 2, 8, 16, 42, 59))
convert(new Date(1951, 10, 31, 2, 2, 24, 399))