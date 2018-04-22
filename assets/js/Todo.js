
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

$("ul").on("click", "span",function(event){
	$(this).toggleClass("completed");
	$(this).parent().slideUp(function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new to do text from input
		var y = ($(this).val());
		//clear the text
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + y + "</li>");
	}
});

$("#plus").click(function(){
	$("input[type='text']").fadeToggle();
});
