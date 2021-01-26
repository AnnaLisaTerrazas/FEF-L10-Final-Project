$(document).ready(function(){
    $(".icon").hover(function(){
        $(this).css("width", "120px");
    }, function(){
        $(this).css("width", "100px");
    });
});


let gitHubRequest = new XMLHttpRequest();
gitHubRequest.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let gitObject = JSON.parse(this.responseText);
   
   
    //document.getElementById("github").innerHTML = gitObject[0].name;
    for( var i=0; i < gitObject.length; i++) {
        console.log(gitObject[i].name);
        
        document.getElementById("github").innerHTML += "<p>"+gitObject[i].name + "</p>" ;
    }
  }
};
gitHubRequest.open("GET", "https://api.github.com/users/AnnaLisaTerrazas/repos", true);
gitHubRequest.send();