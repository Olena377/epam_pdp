//// .firefox
var isFF = true;
var addRule = (function (style) {
    var sheet = document.head.appendChild(style).sheet;
    return function (selector, css) {
        if ( isFF ) {
            if ( sheet.cssRules.length > 0 ) {
                sheet.deleteRule( 0 );
            }

            try {
                sheet.insertRule(selector + "{" + css + "}", 0);
            } catch ( ex ) {
                isFF = false;
            }
        }
    };
})(document.createElement("style"));

//addRule( '.firefox input::-moz-range-track', 'background: linear-gradient(to right, #408af1, red)' );
//
////$( '.firefox input' ).on( 'input', function( ) {
////    addRule( '.firefox input::-moz-range-track', 'background: linear-gradient(to right, #408af1 ' + this.value + '%, #5a5a5a)' );
////} );
//
//// .chrome
////$( '.chrome input' ).on( 'input', function( ) {
////    $( this ).css( 'background', 'linear-gradient(to right, #408af1 ' + this.value + '%, #5a5a5a)');
////} );
document.getElementById(volumeslider).addEventListener("input", function() {
    this.style.background = 'linear-gradient(to right, #408af1 ' + this.value + '%, red)';
});
