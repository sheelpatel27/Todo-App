//CHeck Of Specific Todos By Clicking

$("ul").on("click","li",function(){
	
	// THIS IS A LONGER CODE
	//if li is gray
	if($(this).css("color") === "rgb(128, 128, 128)"){

		//turn it black
		$(this).css({
			textDecoration:"none", 
			color:"black"
		});	
	}
	//else turn it gray
	else { 
	$(this).css({
		textDecoration:"line-through", 
		color:"gray"});
	}


	//THIS IS A SHORT Code
	$(this).toggleClass("Completed");

});


//CLICK TO DELETE TODO
$("ul").on("click","span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();


});

$("input[type='text']").on("keypress", function(event){

	if(event.which === 13){

		//grabbingnew todo text from input
		var todoText = $(this).val();
		
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText +"</li>");
		$(this).val("");
		
	}


});

$(".fa-pencil-square-o").on("click", function(){
	$("input[type='text']").fadeToggle(400);



});