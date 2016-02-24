$(document).ready(function() {
	$(document).on('change', '.bt-checkbox', function() {
		if (this.checked) {
			$('.tripnotes').slideDown(100);
		} else {
			$('.tripnotes').slideUp(100);
		}
	});

	$(document).on('change', '#terms-checkbox', function() {
		if (this.checked) {
			$('#confirmbutton').prop('disabled', false)
		} else {
			$('#confirmbutton').prop('disabled', true)
		}
	});

	$(document).on('click', '.btn-continue-1', function() {
		$('.paymentcontent').slideUp(300);
		$('.transfercontent').slideDown(100);
		// $('.transfertab').css('border-top', 'none');
	});
	$(document).on('click', '.paymentheader', function() {
		$('.paymentcontent').slideDown(300);
		$('.transfercontent').hide();
	});
	$(document).on('click', '.btn-continue-2', function() {
		$('.transfercontent').slideUp(300);
		$('.abouttripcontent').slideDown(100);
	});
	$(document).on('click', '.transferheader', function() {
		$('.transfercontent').slideDown(300);
		$('.abouttripcontent').hide();
	});
	$(document).on('click', '#radio1', function() {
		$('#transferbutton').prop('disabled', false);
		$('.employeesearch').slideUp(100);
	});
	$(document).on('click', '#radio2', function() {
		$('#transferbutton').prop('disabled', true);
		$('.employeesearch').slideDown(100);
	});


document.getElementById("messageText").value = "Hello Habib! I am Cristina, a travel manager for Pinterest. I am booking this trip on behalf of Jonathan, an employee in my company. He will be traveling to Brooklyn, NY for a business trip. Are these dates available for your listing?"
document.getElementById("transferbutton").disabled = "disabled"
document.getElementById("confirmbutton").disabled = "disabled"

});