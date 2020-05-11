var display_coffee = function(data1, searchey){

 	console.log(searchey);
  
       $("#coffee").empty()

	var count = 0; 


	if(data1.length == 0){
		console.log("empty data1!");
		var row = $("<div class ='row bottom_row_padding'>")
		 var col_name = $("<div class ='col-md-4'>")
		 $("#error").append("No Results Found, this coffee shop must not have oatmilk! If you know it does, feel free to add it <a href = /create> here </a>")
                $(row).append(col_name)
	}
	else
	{
	$("#error").empty(); 

	$("#coffee").append("<div> You have " + data1.length + " results! </div> <br>")
	var row = $("<div class ='row row1 bottom_row_padding'>")
	var col_name = $("<div class ='col-md-3'>")
	col_name.append("Shop Name")
	row.append(col_name)
	var col_address = $("<div class ='col-md-3'>")
	col_address.append("Address")
	row.append(col_address)
	var col_rating= $("<div class ='col-md-2'>")
	col_rating.append("Rating")
	row.append(col_rating)
	col_link = $("<div class ='col-md-2'>")
	col_link.append("Link")
	row.append(col_link)

	$("#coffee").append(row)
        $("#coffee").append("<hr>")
        $.each(data1, function(i, datum){
                var row = $("<div class ='row bottom_row_padding'>")
                var col_name = $("<div class ='col-md-3'>")
                
		var temp = datum["ShopName"]
		var temp1 = temp.split(' ')
		$.each(temp1, function(i, value)
		{
		      var temp3 = value; 

		      if(temp3.toLowerCase()  == searchey.toLowerCase()){
			$(col_name).append("<span style='background-color: yellow'>" + value + "</span>")
			}
		      else
		      { $(col_name).append(" " + value)}
		})
                $(row).append(col_name)

                var col_address = $("<div class ='col-md-3'>")
                $(col_address).append(datum["Address"])
                $(row).append(col_address)

                var col_rating = $("<div class = 'col-md-2'>")
                $(col_rating).append(datum["Rating"])
                 $(row).append(col_rating)

                var col_name = $("<div class ='col-md-2'>")
          var id = datum["Id"]
	var url = "view/" + id; 
      var view_button = "<a href= '" + url + "'>shop page</a>";
                $('#view_button').click(function(){
		console.log("button clicked"); 
		shopview1(id)
        })


		$(col_name).append(view_button)
		$(col_name).append($("<br>"))

        $(row).append(col_name)
var col_name = $("<div class ='col-md-2'>")
	 var delete_button = $("<button class = 'btn btn-danger'>X</button>")
                $(delete_button).click(function(){
                 var id = datum["Id"]
		console.log("this is value sent to delete: " + id)	
		delete_shop(id)
				
})
 $(row).append(col_name)

        $("#coffee").append(row)
	$("#coffee").append("<hr>")
	count = count + 1; 
	})

}


}

var create = function(newshop)
{
	var shop = newshop;

    $.ajax({
        type: "POST",
        url: "create1",
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        data : JSON.stringify(shop),
        success: function(result){
             var all_data = result["data"]
             data = all_data
	     var id1 = result["id"]
	     console.log(data)
	     console.log(id1)
	     var url = "http://localhost:5000/view/" + id1;
		                 $('#warning1').empty();
	     allgood.innerHTML = 'Shop Succesfully Created! <a href=' + url + '>See it Here!</a>'
	        $("#shopname").val("shop name");
        $("#rating").val("rating");
        $("#description").val("description");
        $("#image").val("image url");
        $("#address").val("address");
        $("#topreviews").val("review");
	$("#shopname").focus(); 
//	var url = "http://localhost:5000/view/" + id1; 
//	window.open(url); 
	},
        error: function(request, status, error){
            console.log("Error");
            console.log(request)
            console.log(status)
            console.log(error)
        }
    });
}

var update = function(newdesc)
{
    var mydesc = newdesc; 
    idnew = mydesc["Id"];

    $.ajax({
        type: "POST",
        url: "update",
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        data : JSON.stringify(mydesc),
        success: function(result){
             var all_data = result["data"]
             data = all_data
             var id1 = result["id"]
             console.log(data)
             console.log(id1)
        },
        error: function(request, status, error){
            console.log("Error");
            console.log(request)
            console.log(status)
            console.log(error)
        }
    });

}


var delete_shop = function(id)
{
   
   var id1 = {"id": id}
 
   console.log("this is id ready to be deleted: " + id);

    $.ajax({
        type: "POST",
        url: "delete_shop",
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        data : JSON.stringify(id),
        success: function(result){
             var all_data = result["data"]
             data = all_data
             //display_coffee(data)
	               var searched1 = $("#searched").val()
               console.log("this is searched1: " + searched1)
               return_search(searched1)
        },
        error: function(request, status, error){
            console.log("Error");
            console.log(request)
            console.log(status)
            console.log(error)
        }
    });

}

var delete_review = function(review)
{
   
   var id1 = {"review": review}
   
   console.log("this is review ready to be deleted: " + review);
	
       $.ajax({
        type: "POST",
        url: "delete_review",
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        data : JSON.stringify(id1),
        success: function(result){
             var all_data = result["data"]
             data = all_data
        },
        error: function(request, status, error){
            console.log("Error");
            console.log(request)
            console.log(status)
            console.log(error)
        }
    });

}



var return_desc = function(desc)
{
	console.log("in return desc");
	var send = desc; 

    $.ajax({
        type: "POST",
        url: "returndesc",
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        data : JSON.stringify(send),
        success: function(result){
            var data1 = result["data1"]
	    
        },
        error: function(request, status, error){
            console.log("Error");
            console.log(request)
            console.log(status)
            console.log(error)
        }
    });

}

var return_search = function(searched)
{
	var searchey = searched
    console.log("in return search");

    $.ajax({
        type: "POST",
        url: "returnsearch",
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        data : JSON.stringify(searchey),
          success: function(result){   
	if (window.location.href.indexOf("search") > -1) {
	    var searchdata = result["data1"]
            display_coffee(searchdata, searchey)
	     }
	else
	{	
		      var newWindow = window.open("http://127.0.0.1:5000/search")
		      newWindow.onload = function(){newWindow.window.return_search(searchey)}
	}
	
        },
        error: function(request, status, error){
            console.log("Error");
            console.log(request)
            console.log(status)
            console.log(error)
        }
    });
}


var shopview1 = function(id)
{
	$.ajax({
		
	        type: "POST",
        url: "view/<id>",
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        data : JSON.stringify(id),
        success: function(result){
            var data = result["data"]
           console.log("inside shopview1"); 

        },
        error: function(request, status, error){
            console.log("Error");
            console.log(request)
            console.log(status)
            console.log(error)
        }
});

}



var display_search = function(searched, data)
{

	$("#coffee1").empty() 

	var data_to_search = searched
	   
	var data1 =[];

        $.each(data, function(i, datum){
	if(data_to_search == datum["ShopName"])
	{

                var row = $("<div class ='row bottom_row_padding'>")
                var col_name = $("<div class ='col-md-4'>")
                $(col_name).append(datum["ShopName"])
                $(row).append(col_name)

                var col_address = $("<div class ='col-md-4'>")
                $(col_address).append(datum["Address"])
                $(row).append(col_address)

                var col_rating = $("<div class = 'col-md-4'>")
                $(col_rating).append(datum["Rating"])
                 $(row).append(col_rating)

                var col_name = $("<div class ='col-md-3'>")

        $(row).append(col_name)

        $("#coffee1").append(row)
}
})

	
	console.log("in display search");
	console.log(data1); 

}


var display_cards = function(){
       var length = data.length;
       var row = $('<div class="row top-b">')
  
      for(i=0; i<12; i++){
	
	var column = $('<div class="col-lg-3 top-buffer">')
	var style = $('<div class = "top-buffer">')

   var url = "http://127.0.0.1:5000/view/" + data[i]["Id"];
	url2 = data[i]["Id"];
	 var newcard = $('<div class="card h-100 text-center" href = ' + url + ' style="width: 15rem; height: 15rem; font-size: 15px">')
	
      var view_button = "<a href= '" + url + "'>" + data[i]["ShopName"] + "</a>";
                $('#view_button').click(function(){
                console.log("button clicked");
        })

	 var ref = $('<a href= /view/' + url2 + '>')
         var image = $('<img class="card-img-top" src=' + data[i]["Image"] + ' width="100" height="200" alt = "coffeeshopcardimage" ' + '>')
	newcard.append(image);
        newcard.append(view_button)
        var n1 = $('<div class="card-title">')
        newcard.append(n1);
	var newlink = $('<a href ' + url + ' class="btn btn-primary stretched-link">');
	ref.append(newcard)
	column.append(ref)
        row.append(column)
	}
	$("#newcoffee").append(row)	
}

var display_reviews = function()
{
        var url = window.location.href;
        var n = url.includes("view");

        console.log("inside display reviews")
        console.log("this is n " + n)

        if(n)
        {
                var last = url.substring(url.lastIndexOf("/") + 1, url.length);
                console.log("this is last" + last);
                 $.each(data, function(i, datum){
                        var temp = datum["Id"]
                        if(temp == last)
                        {
                                var reviews = datum["TopReviews"]
                                for(var j=0; j<reviews.length; j++){
					if(reviews[j].marked_as_deleted == "false")
					{
                                        var col_name = $("<div class ='col-md-12'>")
                                        var delete_button = $("<button class = 'btn btn-danger'>X</button>")
					
                                                var temp = reviews[j].review;
 
					$(delete_button).click(function(){
                				console.log("this clicked!");
						delete_shop(temp)
					})
                                        $(col_name).append(reviews[j].review)
                                        $(col_name).append(delete_button)
                                        $("#reviewlist").append(col_name)
                                }
			     }

                        }

                });
        }
}

$(document).ready(function(){
$('#warning1').empty();

        $("#searched").focus();
        $("#searched").val("Search Coffee Shops");

	
	$("#shopname").val("shop name");
	$("#rating").val("rating");
	$("#description").val("description");
	$("#image").val("image url");
        $("#address").val("address");
 	$("#topreviews").val("review"); 
	$("#shopname").focus(); 
	console.log("ready!"); 

	$("#updatereview").focus(); 
	$("#updatereview").val("enter description here!")

	
	display_cards(); 
//	display_reviews(); 
	$("#submit_new").click(function(){
		var newshopname = $("#shopname").val()
		var newrating = $("#rating").val()
		var newdescription = $("#description").val()
		var newimage = $("#image").val()
		var newaddress = $("#address").val()
		var newreviews = $("#topreviews").val()

		console.log("this is newshopname" + newshopname);
		
		var testshopname = newshopname.replace(/^\s+/, '').replace(/\s+$/, '');
		var testrating = newrating.replace(/^\s+/, '').replace(/\s+$/, '');
		var testdescription = newdescription.replace(/^\s+/, '').replace(/\s+$/, '');
		var testimage = newimage.replace(/^\s+/, '').replace(/\s+$/, '');
		var testaddress = newaddress.replace(/^\s+/, '').replace(/\s+$/, '');
		var testreviews = newreviews.replace(/^\s+/, '').replace(/\s+$/, '');
 
		console.log("this is testshopname" + testshopname);
		if(newshopname == "shop name" || testshopname.length == 0)
		{
			$('#warning1').empty();
			$("#warning1").prepend("shop name is empty!");
		}else if(newrating == "rating" || testrating.length ==0)
		{
			$('#warning1').empty();
			$("#warning1").prepend("rating is empty!");
		}
		else if( isNaN(newrating) == true)
		{	
			                        $('#warning1').empty();
                        $("#warning1").prepend("rating is not a number!");
		}
		else if(newdescription == "description" || testdescription.length ==0)
		{
			$('#warning1').empty();
			$('#warning1').prepend("description is empty!");
		}
		else if(newimage == "image url" || testimage.length == 0)
		{
			$('#warning1').empty();
			$('#warning1').prepend("image url is empty!");
		}
		else if(newaddress == "address" || testaddress.length== 0)
		{
			$('#warning1').empty();
			$('#warning1').prepend("address is empty!");
		
		}
		else if(newreviews == "review" || testreviews.length ==0)
		{
			$('#warning1').empty();
			$('#warning1').prepend("review is empty!")
			
		}
		else
   		{
		var newentry = {"ShopName" : newshopname,
				"Rating" : newrating,
				"Description" : newdescription,
				"Image" : newimage,
				"Address" : newaddress,
				"TopReviews" : [{"review" : newreviews},],}
		 $('#warning1').empty();
		console.log(newentry);
		create(newentry); }
	});

	$("#submitdescription").click(function(){
		console.log("submit description clicked");
		var newdesc = $("#newdescription").val();
		console.log("this is new description: " + newdesc);
		var segment_str = window.location.pathname; // return segment1/segment2/segment3/segment4
		var segment_array = segment_str.split( '/' );
		var last_segment = segment_array.pop();
		console.log(last_segment);	
		return_desc(newdesc, last_segment)
	});

	$("#editd").click(function(){
		console.log("editd clicked"); 
		  $("#wonky").empty()
		  $("#editing").empty() 
 		  wonky.innerHTML = 'Enter your new description here: <div></div> <input type="text" id="fname" name="fname">' 
		  var submit = $('<button>submit</button>')
		$("#fname").focus(); 

		$(submit).click(function(){
                console.log("submitd clicked");
		var newdesc = $("#fname").val();
		console.log("this is newdesc" + newdesc)
		 $("#wonky").empty()
		$("#wonky").append(newdesc)
		                $("#editing").append(' <button id="editd">Edit Description</button> ' )
	});
		var discard = $('<button>discard</button>')
	$(discard).click(function(){
                console.log("discardd clicked");
                $("#wonky").empty();
		                $("#editing").append(' <button id="editd">Edit Description</button> ' )
        	location.reload(); 
	});
		$("#wonky").append("<div></div>")
		$("#wonky").append(submit)
		$("#wonky").append(discard)
	});

	
    $("#submit_name").click(function(){
                console.log("submit name clicked");
                var cururl = window.location.href;
                var searched1 = $("#searched").val()
                console.log("this is searched1: " + searched1);
                return_search(searched1)
        });
	
	$("#submit_review").click(function(){
		var searched2 =  $("#updatereview").val()
		console.log("this is new description: " + searched2)
		console.log("the url of the page is:" + window.location.href)
		var link = window.location.href
		var length = link.length
		var numid = link.charAt(length-1);
		console.log(numid)
		var descriptionnew = {"Id" : numid, "TheirDescription": searched2,}
		console.log(descriptionnew)
 		update(descriptionnew);
	})
})
