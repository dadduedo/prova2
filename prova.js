var XMLHttpRequest = require('xhr2');

function makeRequest (method, url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function () {
        if (this.status >= 200 && this.status < 300) {
            resolve(xhr.response);
        } else {
            reject({
            status: this.status,
            statusText: xhr.statusText
            });
    }
};
// xhr.onerror = function () {
// reject({
//     status: this.status,
//     statusText: xhr.statusText
// });
// };
xhr.send();
});
}
makeRequest('GET', 'https://jsonplaceholder.typicode.com/users')
.then(function (response) {
    return response;
})
.then(function (data) {
    appendData(data);
})
.catch(function (err) {
    console.log('error: ' + err);
});

function appendData(data) {
    const jsondata = JSON.parse(data)
    console.log(typeof jsondata[0])
    console.log("PAIR " + 0 + ": " + jsondata[0].name);
// var mainContainer = document.getElementById("myData");
// for (var i = 0; i < data.length; i++) {
//     var div = document.createElement("div");
//     div.innerHTML = 'Name: ' + data[i].id + ' ' + data[i].email;
//     mainContainer.appendChild(div);
//}
}