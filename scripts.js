$(document).ready(function(){

    var printSize = function(appHeading) {
        //alert(element);

        var appid = appHeading.id;

        $.getJSON("https://itunes.apple.com/lookup/json?id=" + appid + "&callback=?", function( json ) {
            //appHeading.innerHTML = appHeading.innerHTML + ":&nbsp&nbsp&nbsp&nbsp" + (json.results[0].fileSizeBytes/1024/1024).toPrecision(2) + " MB " + "&nbsp&nbsp&nbsp&nbsp&nbspversion: "+json.results[0].version + "&nbsp&nbsp&nbsp&nbsp&nbspavg rating:&nbsp&nbsp"+json.results[0].averageUserRatingForCurrentVersion + "&nbsp&nbsp&nbsp&nbsp&nbspminOS&nbsp&nbsp: "+json.results[0].minimumOsVersion + "&nbsp&nbsp&nbsp&nbsp&nbspratingCount tot/cur :&nbsp&nbsp"+json.results[0].userRatingCount+" / "+json.results[0].userRatingCountForCurrentVersion;
            appHeading.innerHTML = appHeading.innerHTML + "<td>"+(json.results[0].fileSizeBytes/1024/1024).toFixed(2) + " MB "+"<\/td>" + "<td>"+json.results[0].version+"<\/td> <td>"+json.results[0].averageUserRatingForCurrentVersion+"<\/td> <td>"+json.results[0].minimumOsVersion+"<\/td> <td>"+json.results[0].userRatingCount+"<\/td>" + "<td>"+json.results[0].userRatingCountForCurrentVersion+"<\/td>";
        });

    }

   var myalert = function() {
       // get an array of child nodes
       var rows = $('#Apps').children()[0].rows;

       for (var i=0; i<rows.length; i++) {
           printSize(rows[i]);
       }

   	}
    myalert();
});
