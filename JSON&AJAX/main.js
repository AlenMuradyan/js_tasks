let docLoad = function() {
    let myRequest = new XMLHttpRequest();
    myRequest.onload = function () {
        if(this.readyState==4 && this.status==200){
            alert(this.responseText);
        }
    };
    myRequest.open('GET', 'data.json');
    myRequest.send();
}
