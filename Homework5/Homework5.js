function debounce(speedTimer, milisec) {
    var Timer1;
    return function() {
        if(Timer1) {
            return clearTimeout(Timer1);
        }
        Timer1 = setTimeout(function() {
           speedTimer(arguments),
            milisec
        });
    }
};

var value = function(val) {
    console.log(val);
}
var deb1 = debounce(value, 1000);
var deb2 = debounce(value, 2000);

for (var i = 0; i < 10; i++) {
    deb1('Called One!'); 
    deb2('Called Two!'); 
}


function promiseSetTimeout(Timer2) {
    return new Promise(function(resolve, reject) {
        return setTimeout(resolve, Timer2)
    });
}

var XMLHR = function promXmlHttpReq(url) {
    return new Promise(function(resolve,reject) {
        var XHReq = new XMLHttpRequest();
        XHReq.open(method = 'GET', url, true);
        XHReq.onload = function() {
            if(XHReq.status === 200) {
                alert(true);
                resolve(XHReq.response);
            }
            else {
                reject('Error');
                alert(false);
            }
            XHReq.onerror = function() {
                reject(new Error('Error network'));
            }
        }
        XHReq.send();
    });
}

promXmlHttpReq("https://www.blizzard.com/ru-ru/").then(function(response) {
    alert('Fulfilled' + response);
});
promXmlHttpReq("https://www.blizzard.com/ru-ru/").catch(function(error) {
    alert('Rejected' + error)
})

