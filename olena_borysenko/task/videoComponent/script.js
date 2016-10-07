smallWordHelper = sentence => {
    let string = '';
    sentence.split(' ').forEach(function(elem) {
        if(elem.length > 3) {
            string += ' ' + elem.replace(/[a,e,u,i,o]/gi, '')
        } else {
            string += ' ' + elem.toUpperCase();
        }
    })
    return string;
};