

// this function for open subproduct tab start from below

	    $(document).ready(function(){
	       // $("#cate-list").hide();
			$("#open-tab").click(function(){
				$("#open-tab").hide();
				$("#close-tab").show();
				$("#cate-list").show();
			});
			$("#close-tab").click(function(){
				$("#close-tab").hide();
				$("#open-tab").show();
				$("#cate-list").hide();
			});
		});
// this function for navebar end

// this function for open subproduct tab start from below

	    $(document).ready(function(){
	        $("#close").hide();
			$("#open").click(function(){
				$("#open").hide();
				$("#close").show();
			});
			$("#close").click(function(){
				$("#close").hide();
				$("#open").show();
			});
		});
// this function for navebar end


function validateForm() {
  var message = document.forms["blogComment"]["message"].value;
  var name = document.forms["blogComment"]["name"].value;
  var emailID = document.forms["blogComment"]["emailID"].value;

  
  var add_regex = /^[0-9a-zA-Z \-'_',]+$/;
  var name_regex = /^[0-9a-zA-Z \-'_]+$/;
  var e_id = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  
  if (message.length == 0){
    $('#head').text("* All fields are mandatory *"); // This Segment Displays The Validation Rule For All Fields
    $('#p2').text("* Name fields is mandatory *"); // This Segment Displays The Validation Rule For All Fields
    $('#p3').text("* Please enter a valid email address *"); // This Segment Displays The Validation Rule For Email
    $("#emailID").focus();
    $("#message").focus();
    $("#name").focus();
    return false;
  }
    else if (!message.match(add_regex) || message.length == 0) {
        $('#p1').text("For your message please use alphabets only *"); // This Segment Displays The Validation Rule For Name
        $('#head').text(""); // This Segment Displays The Validation Rule For All Fields
        $("#message").focus();
        
        return false;
    }
    else if (name.length == 0){
        $('#p2').text("* Name enter name *"); // This Segment Displays The Validation Rule For All Fields
        $("#name").focus();
        return false;
    }
    else if (!name.match(name_regex) || name.length == 0) {
        $('#p2').text("For your name please use alphabets only *"); // This Segment Displays The Validation Rule For Name
        $("#name").focus();
        return false;
    }
    else if (emailID.length == 0) {
        $('#p3').text("* Please enter a valid email address *"); // This Segment Displays The Validation Rule For Email
        $("#emailID").focus();
        return false;
    }
    else if (!emailID.match(e_id) || emailID.length == 0) {
        $('#p3').text("For your name please use alphabets only *"); // This Segment Displays The Validation Rule For Name
        $("#emailID").focus();
        return false;
    }
}

function validateContactForm() {
  
  var name = document.forms["contactForm"]["name"].value;
  var email = document.forms["contactForm"]["email"].value;
  var mobile = document.forms["contactForm"]["mobile"].value;
  var address = document.forms["contactForm"]["address"].value;
  var message = document.forms["contactForm"]["message"].value;

  
  var add_regex = /^[0-9a-zA-Z \-'_','.']+$/;
  var name_regex = /^[0-9a-zA-Z \-'_]+$/;
  var e_id = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  var number_regex = /^[0-9\$ ]{0,10}$/;
  
  
  if (name.length == 0){
    $('#head').text("All fields are mandatory *");
    $('#p1').text("Please enter a name *"); 
    $('#p2').text("Please enter a email address *"); 
    $('#p3').text("Please enter a mobile Number *");
    $('#p4').text("Please enter a address... *"); 
    $('#p5').text("Please enter a message... *"); 
    $("#emailID").focus();
    $("#message").focus();
    $("#name").focus();
        return false;
    }
    else if (!name.match(name_regex) || name.length == 0) {
        $('#p1').text("For your name please use alphabets only *"); // This Segment Displays The Validation Rule For Name
        $("#name").focus();
        return false;
    }
    else if (email.length == 0) {
        $('#p2').text("Please enter a email address *"); // This Segment Displays The Validation Rule For Email
        $("#email").focus();
        return false;
    }
    else if (!email.match(e_id) || email.length == 0) {
        $('#p2').text("Please enter a valid email address *"); // This Segment Displays The Validation Rule For Name
        $("#email").focus();
        return false;
    }
    else if (mobile.length == 0){
        $('#p3').text("Please enter mobile number"); // This Segment Displays The Validation Rule For All Fields
        $("#number").focus();
      
        return false;
    }
    else if (!mobile.match(number_regex) || mobile.length == 0) {
        $('#p3').text("Please enter numeric & ten digits only *"); // This Segment Displays The Validation Rule For All Fields
        $("#number").focus();
        return false;
    }
    else if (mobile.length != 10) {
        $('#p3').text("Number should be ten digits *"); // This Segment Displays The Validation Rule For All Fields
        $("#number").focus();
        return false;
    }
     else if (message.length == 0){
        $('#p5').text("Please enter message*"); // This Segment Displays The Validation Rule For All Fields
        $("#message").focus();
      
        return false;
    }
    else if (!message.match(add_regex) || message.length == 0) {
        $('#p5').text("For your message please use alphabets only *"); // This Segment Displays The Validation Rule For Name
        $("#message").focus();
        return false;
    }
    else if (address.length == 0){
        $('#p4').text("Please enter message*"); // This Segment Displays The Validation Rule For All Fields
        $("#address").focus();
      
        return false;
    }
    else if (!address.match(add_regex) || address.length == 0) {
        $('#p4').text("For your message please use alphabets only *"); // This Segment Displays The Validation Rule For Name
        $("#address").focus();
        
        return false;
    }
}



function SNForm() {
  
  var name = document.forms["contactForm"]["name"].value;
  var email = document.forms["contactForm"]["email"].value;
  var mobile = document.forms["contactForm"]["mobile"].value;
  var state = document.forms["contactForm"]["state"].value;
  var Location = document.forms["contactForm"]["Location"].value;
  var Brand = document.forms["contactForm"]["Brand"].value;
  var Model = document.forms["contactForm"]["Model"].value;
  
  var pin = document.forms["contactForm"]["pin"].value;
  var address = document.forms["contactForm"]["address"].value;

  
  var add_regex = /^[0-9a-zA-Z \-'_',]+$/;
  var name_regex = /^[0-9a-zA-Z \-'_]+$/;
  var e_id = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  var number_regex = /^[0-9\$ ]{0,10}$/;
  
  
  if (name.length == 0){
    $('#head').text("All fields are mandatory *");
    $('#p1').text("Please enter a Name *"); 
    $('#p2').text("Please enter a Email address *"); 
    $('#p3').text("Please enter a Mobile Number *");
    $('#p4').text("Please enter  landmark *"); 
    $('#p5').text("Please enter a State *"); 
    $('#p6').text("Please enter a Brand *"); 
    $('#p7').text("Please enter a Model *"); 
     $('#p8').text("Please enter Address  *"); 
    $('#p9').text("Please enter a Pin code *");
    $("#emailID").focus();
    $("#address").focus();
    $("#name").focus();
        return false;
    }
    else if (!name.match(name_regex) || name.length == 0) {
        $('#p1').text("For your name please use alphabets only *"); // This Segment Displays The Validation Rule For Name
        $("#name").focus();
        return false;
    }
    else if (email.length == 0) {
        $('#p2').text("Please enter a email address *"); // This Segment Displays The Validation Rule For Email
        $("#email").focus();
        return false;
    }
    else if (!email.match(e_id) || email.length == 0) {
        $('#p2').text("Please enter a valid email address *"); // This Segment Displays The Validation Rule For Name
        $("#email").focus();
        return false;
    }
    else if (mobile.length == 0){
        $('#p3').text("Please enter mobile number"); // This Segment Displays The Validation Rule For All Fields
        $("#number").focus();
      
        return false;
    }
    else if (!mobile.match(number_regex) || mobile.length == 0) {
        $('#p3').text("Please enter numeric & ten digits only *"); // This Segment Displays The Validation Rule For All Fields
        $("#number").focus();
        return false;
    }
    else if (mobile.length != 10) {
        $('#p3').text("Number should be ten digits *"); // This Segment Displays The Validation Rule For All Fields
        $("#number").focus();
        return false;
    }
    else if (!state.match(name_regex) || state.length == 0) {
        $('#p5').text("Please use alphabets only *"); // This Segment Displays The Validation Rule For All Fields
        $("#state").focus();
        return false;
    }
    else if (state.length == 0) {
        $('#p5').text("Please enter state*"); // This Segment Displays The Validation Rule For All Fields
        $("#state").focus();
        return false;
    }
    else if (Brand.length == 0){
        $('#p6').text("Please enter Brand*"); // This Segment Displays The Validation Rule For All Fields
        $("#Brand").focus();
        return false;
    }
    
    else if (!Brand.match(add_regex) || Brand.length == 0) {
        $('#p6').text("For your message please use alphabets only *"); // This Segment Displays The Validation Rule For Name
        $("#Brand").focus();
        
        return false;
    }
    
    else if (Model.length == 0){
        $('#p7').text("Please enter Model*"); // This Segment Displays The Validation Rule For All Fields
        $("#Model").focus();
        return false;
    }
    
    else if (!Model.match(add_regex) || Model.length == 0) {
        $('#p7').text("For your message please use alphabets only *"); // This Segment Displays The Validation Rule For Name
        $("#Model").focus();
        
        return false;
    }
    else if (!pin.match(number_regex) || pin.length == 0) {
        $('#p9').text("Please enter numeric & 6 digits only *"); // This Segment Displays The Validation Rule For All Fields
        $("#number").focus();
        return false;
    }
    else if (pin.length != 6) {
        $('#p9').text("Number should be 6 digits *"); // This Segment Displays The Validation Rule For All Fields
        $("#pin").focus();
        return false;
    }
    else if (address.length == 0){
        $('#p8').text("Please enter address*"); // This Segment Displays The Validation Rule For All Fields
        $("#address").focus();
      
        return false;
    }
    else if (!address.match(add_regex) || address.length == 0) {
        $('#p8').text("For your address please use alphabets only *"); // This Segment Displays The Validation Rule For Name
        $("#address").focus();
        
        return false;
    }
}



