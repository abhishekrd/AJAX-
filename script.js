XMLHttpRequest.prototype.realSend = XMLHttpRequest.prototype.send;
XMLHttpRequest.prototype.send = function(value) {
    this.addEventListener("progress", function(){
        console.log("Loading...");
    }, false);

    this.addEventListener("load", function(){
        console.log(this.responseText);
    }, false);
    this.realSend(value);
};

let btn = document.getElementById("btn");
document.addEventListener("click",fetchPosts)

function fetchPosts() {
     console.log("Button Clicked");
    var xhr = new XMLHttpRequest()

    xhr.open("GET","https://jsonplaceholder.typicode.com/posts",false);
// Special thing is "No Need to Write onprogress and onload events!!!"

    xhr.send();
}