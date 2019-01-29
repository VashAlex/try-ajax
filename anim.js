



// var request = new XMLHttpRequest();

// request.onredystatechange = function () {
// 	if (request.readyState == 4 && request.status == 200) {
// 		console.log(request.readyState)
// 	}
// }
// request.open('GET', "http://codeit.pro/codeitCandidates/serverFrontendTest/user/registration");
// request.send();
    

 
    var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
    // if (this.readyState == 4 && this.status == 200) {
    //    // вот тут считываешь инфу с пришедшего джсона, а следующая строка это вывод инфы в хтмл
    //    var myObj = JSON.parse(this.responseText);	
    //    document.getElementById("demo").innerHTML = 'xhttp.responseText';
    // }
    console.log(1);
xhttp.open("GET", 'http://codeit.pro/codeitCandidates/serverFrontendTest/company/getList', true);
	xhttp.send();
 
};
