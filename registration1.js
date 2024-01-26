function validateForm() {
  console.log("hello");
  var name = document.getElementById('name').value;
  //var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  // Reset error messages
  document.getElementById('firstNameError').innerHTML = '';
  //document.getElementById('emailError').innerHTML = '';
  document.getElementById('passwordError').innerHTML = '';

  // Validate Name
  var nameRegex = /^[a-zA-Z]{6,}$/;
  if (name.trim() === '') {
    document.getElementById('firstNameError').innerHTML = 'First Name is required';
    return false;
  }
  if (nameRegex.test(name) === false) {
    document.getElementById('firstNameError').innerHTML = 'Invalid name. Please use only letters and ensure the length is at least 6 characters.';
    return false;
  }
  // Validate Password
  if (password.length < 6) {
    document.getElementById('passwordError').innerHTML = 'Password should be at least 6 characters';
    return false;
  }
  // All fields are valid
  alert('Form submitted successfully!');
  return true;
  /*
  // Validate Email
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(email)===false) 
  {
    document.getElementById('emailError').innerHTML = 'Invalid Email';
    return false;
  }

  

  
  */

}
