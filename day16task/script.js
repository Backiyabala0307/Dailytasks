let count = 10;

let number=document.getElementById('number');
// number.addEventListener('click', function (event) { event,ten(callback) });
number.addEventListener('click',function(){ten});

let ten = function (callback) {
    number.textContent = count--;
    setTimeout(() => {
        callback();
    }, 1000);
    
}
let nine = function (callback) {
    number.textContent = count--;
    setTimeout(() => {
        callback();
    }, 1000);
} 
let eight = function (callback) {
    number.textContent = count--;
    setTimeout(() => {
        callback();
    }, 1000);
}
let seven = function (callback) {
    number.textContent = count--;
    setTimeout(() => {
        callback();
    }, 1000);
}
let six = function (callback) {
    number.textContent = count--;
    setTimeout(() => {
        callback();
    }, 1000);
}
let five = function (callback) {
    number.textContent = count--;
    setTimeout(() => {
        callback();
    }, 1000);
}
let four = function (callback) {
    number.textContent = count--;
    setTimeout(() => {
        callback();
    }, 1000);
}
let three = function (callback) {
    number.textContent = count--;
    setTimeout(() => {
        callback();
    }, 1000);
}
let two = function (callback) {
    number.textContent = count--;
    setTimeout(() => {
        callback();
    }, 1000);
}
let one = function (callback) {
    number.textContent = count--;
    setTimeout(() => {
        callback();
    }, 1000);
}

ten(function() {
    nine(function () {
        eight(function () {
            seven(function () {
                six(function () {
                    five(function () {
                        four(function () {
                            three(function () {
                                two(function () {
                                    one(function () {

                                        number.textContent = 'HAPPY INDEPENDENCE DAY';

                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});
        




