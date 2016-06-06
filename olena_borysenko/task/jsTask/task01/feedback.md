* конструкцию else if можно поменять на switch, так более наглядно
* можно описать с помощью тернарного оперетора

```
if(arg - arg.toFixed(0) === 0) {
            return 'integer';
        }else {
            return 'float';
        }
```
С тернарным оператором:
```
    return (arg - arg.toFixed(0) === 0) ? 'integer' : 'float';
```

* можно чуть упростить структуру

```
function typeofArg(arg) {
    var clas = Object.prototype.toString.call(arg).slice(8, -1);

    if(clas === 'Number' ) {
        return (arg - arg.toFixed(0) === 0) ? 'integer' : 'float';
    } else {
        return clas.toLowerCase();
    };
```

* `typeofArg(NaN)` вернет float