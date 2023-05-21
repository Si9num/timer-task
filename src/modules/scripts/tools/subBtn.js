 function subBtn(){

let formData = new FormData(document.forms[0]);
let xhr = new XMLHttpRequest();

xhr.open('POST', "https://reqres.in/api/users");
xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

let res = {
    h:'',
    p:''
}

xhr.onload = function() {
    sessionStorage.clear()
    if (xhr.status == 201) {
    console.log(xhr.responseText);
    res.h = 'SUCCESS!'
    res.p = 'You have successfully subscribed to the email newsletter'
    sessionStorage.setItem('res',JSON.stringify(res))
    
    } else {
        sessionStorage.clear()
        res.h = "OOPS"
        res.p = "Something went wrong"
        sessionStorage.setItem('res',JSON.stringify(res))
    console.log(xhr.statusText);
    }
    };
    xhr.send(JSON.stringify(formData));
    xhr.onerror = function(){
        sessionStorage.clear()
        res.h = "OOPS"
        res.p = "Something went wrong"
        sessionStorage.setItem('res',JSON.stringify(res))
    console.log(xhr.statusText);
    }
    
}
export default subBtn