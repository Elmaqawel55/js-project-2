var webSiteName=document.getElementById( "webSiteName");
var webSiteUrl=document.getElementById("webSiteUrl");

var items= [];






if(localStorage.getItem("websiteitems")){

    // items= JSON.parse(localStorage.getItem("websiteitem"))
    for(var x = 0 ; x < items.length ; x++){
        displayinfo(x);
    }
}


function addinfo(){
if(validateName() == true && validateUrl() == true){
    var webSite ={
        siteName:webSiteName.value,
        siteUrl:webSiteUrl.value
    }
    items.push(webSite)
    localStorage.setItem("websiteitems" , JSON.stringify(items))
    displayinfo()
    clearform()
    console.log(items)
    }
    else {
    alert('Please enter valid name and url')
}


}






function displayinfo(){
    var cartona= ``;
    for(var i=0 ; i <items.length ; i++)
    {
        cartona += `<tr>
        <td>${i+1}
        </td>
        <td>${items[i].siteName}</td>
        <td><a href="http://${items[i].siteUrl}" target="_blank"><button class="btn btn-warning">visit</button></a></td>
        <td><button class="btn btn-danger" onclick="deleteinfo(${i})">delete</button></td>
        </tr>`
    }
document.getElementById("tablebody").innerHTML=cartona;


}
function clearform(){
    webSiteName.value="";
    webSiteUrl.value="";
}

function deleteinfo(elementNumber){
console.log(elementNumber);
console.log(items);
    items.splice(elementNumber,1)
    localStorage.setItem("websiteitems" ,JSON.stringify(items))
    displayinfo();
}








//  console.log( regexName.test(nameInput)); 
 
 
 function validateName() {
    
 var regexName = /^[A-Z][a-z]{3,12}$/ 
    var massageName = document.getElementById("massegeName")
 var nameInput = webSiteName.value ;
    
    if (regexName.test(nameInput) == true){
        webSiteName.classList.add("is-valid")
        webSiteName.classList.remove("is-invalid")
        massageName.classList.add("d-none")
        return true
        ;}
    
    
        else{
            webSiteName.classList.add("is-invalid")
            webSiteName.classList.remove("is-valid")
            massageName.classList.remove("d-none")
        return false; 
        };
    
    };




    function validateUrl() {
    
        var regexUrl = /^(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?$/ 
           var massageUrl = document.getElementById("massegeUrl")
        var urlInput = webSiteUrl.value ;
           
           if (regexUrl.test(urlInput) == true){
               webSiteUrl.classList.add("is-valid")
               webSiteUrl.classList.remove("is-invalid")
               massageUrl.classList.add("d-none")
               return true
               ;}
           
           
               else{
                   webSiteUrl.classList.add("is-invalid")
                   webSiteUrl.classList.remove("is-valid")
                   massageUrl.classList.remove("d-none")
               return false; 
               };
           
           };
       
       







