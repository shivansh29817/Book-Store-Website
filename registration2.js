function validateForm() {
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
  
    // Reset error messages
    document.getElementById('emailError').innerHTML = '';
    document.getElementById('phoneError').innerHTML = '';
  
    // Validate Email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)===false) 
    {
      document.getElementById('emailError').innerHTML = 'Invalid Email';
      return false;
    }
    if(phone.length!=10)
    {
        document.getElementById('phoneError').innerHTML = 'Phone number must have 10 digits';
        return false;
    }
    // All fields are valid
    alert('Form submitted successfully!');
    return true;
}
  