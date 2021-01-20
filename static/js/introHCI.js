'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})


/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript has been summoned");
		$("#testjs").text("Please wait...");
		$('.jumbotron p').toggleClass("active");
	});
	

	$(".thumbnail").click(projectClick);

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
}

function projectClick(e){
	console.log("Project Clicked")
	e.preventDefault();
	var containingProject = $(this).closest(".project");
	var description = $(containingProject).find(".project-description");
	var projectId = containingProject[0].id;
	
	if (description.length == 0){
		var content = "<div class='project-description' id = d"+projectId + "><p>Description of the project.</p></div>"
		containingProject.append(content);
		description = $(containingProject).find(".project-description");
		description.hide();
		description.fadeIn();


	} else {
		var myId = "d"+projectId;
		$("#"+myId).fadeToggle();
	}
}