jQuery.validator.addMethod("lettersonly", function(value, element) { 
		return this.optional(element) || /^[a-z]+$/i.test(value);
}, "Letters only please."); 

/*jQuery.validator.addMethod("ageLimit", function() {
	var age = $('#age').val();
	if (isNaN(age)|| age<1||age>100) { 
	return false;
} else {
	return true;
});*/

$(document).ready(function() {
	$('#logo').effect('slide', 1100);
	$('#logo').effect('bounce', {times: 3}, 900);

	$('#logo').mouseenter(function() {
		$('#logo').fadeTo('fast', 1);
	});
	$('#logo').mouseleave(function() {
		$('#logo').fadeTo('fast', 0.5);
	});

	$('input').focus(function() {
		$('input').css("outline-color", "#162252");
	});


	$('#specialForm').validate({
		rules: {
			type_name: {
				minlength: 2,
				required: true,
				lettersonly: true
			},
			gender: "required",
			age: {
				required: true,
				digits: true,
				max: 150
			},
			status: "required",
			ignorance: {
				required: true
			},
			money_have: {
				required: true,
				digits: true
			},
			money_wants: {
				required: true,
				digits: true
			},
			popularity_online: {
				required: true,
				digits: true
			},
			rl_friends: {
				required: true,
				digits: true
			}
		},
		highlight: function(element) {
			$(element).closest('.form-group').removeClass('has-success').addClass('has-error');
		},
		success: function(element) {
			$(element).closest('.form-group').removeClass('has-error').addClass('has-success');
		},
		submitHandler: function(form) {
			// do other things for a valid form
			user = $('input[name="type_name"]').val();
			alert("Yay! " + user + " submitted a valid form!");
			form.submit();
		},
		/*highlight: function(element) {
			$(element).closest('.form-group').removeClass('has-success').addClass('has-error');
		},
		success: function(element) {
			element
			.text("All good!").addClass('hidden')
			.closest('.form-group').removeClass('has-error').addClass('has-success');
		},
		errorPlacement: function (error, element) {
            var name = element.attr("name");
            $(".error-label-" + name).append(error);
		}*/
		
	});
});

