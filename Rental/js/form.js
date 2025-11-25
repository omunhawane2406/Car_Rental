 // JavaScript for saving form data to local storage upon form submission
 const form = document.getElementById('checkoutForm');

 form.addEventListener('submit', function(event) {
     event.preventDefault();

     // Collect form data
     const formData = {
         fullname: document.getElementById('fullname').value,
         email: document.getElementById('email').value,
         address: document.getElementById('address').value,
         city: document.getElementById('city').value,
         pickupDate: document.getElementById('pickupDate').value,
         dropDate: document.getElementById('dropDate').value,
         cardname: document.getElementById('cardname').value,
         cardnumber: document.getElementById('cardnumber').value,
         expyear: document.getElementById('expyear').value,
         carSelection: document.getElementById('carSelection').value,
         cvv: document.getElementById('cvv').value 
     };

     // Save form data to local storage
     localStorage.setItem('checkoutFormData', JSON.stringify(formData)); 

     // Show success message
     Swal.fire({
         icon: 'success',
         title: 'Form Submitted!',
         text: 'Your information has been saved.',
         showConfirmButton: false,
         timer: 1500
     });

     // Optionally, you can redirect to another page after form submission
     // window.location.href = '/thank-you.html';
 });