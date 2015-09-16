$(document).ready(function(){

    var printSize = function(appHeading) {
        //alert(element);

        var appid = appHeading.id;
        //alert(appid);

        $.getJSON("https://itunes.apple.com/lookup/json?id=" + appid + "&callback=?", function( json ) {
            appHeading.innerHTML = appHeading.innerHTML + ":&nbsp&nbsp&nbsp&nbsp" + (json.results[0].fileSizeBytes/1024/1024).toPrecision(2) + " MB " + "&nbsp&nbsp&nbsp&nbsp&nbspversion: "+json.results[0].version + "&nbsp&nbsp&nbsp&nbsp&nbspavg rating:&nbsp&nbsp"+json.results[0].averageUserRatingForCurrentVersion + "&nbsp&nbsp&nbsp&nbsp&nbspminOS&nbsp&nbsp: "+json.results[0].minimumOsVersion + "&nbsp&nbsp&nbsp&nbsp&nbspratingCount tot/cur :&nbsp&nbsp"+json.results[0].userRatingCount+" / "+json.results[0].userRatingCountForCurrentVersion;
        });

    }

   var myalert = function() {
       // get an array of child nodes
       var divChildren = $('#Apps').children();


       for (var i=0; i<divChildren.length; i++) {
           //alert(divChildren[i]);
           printSize(divChildren[i]);
       }

   	}
    myalert();
});