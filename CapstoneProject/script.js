document.getElementById('contact_form').addEventListener('submit', function(event) {
    const name = document.getElementById('contact_form_name').value.trim();
    const email = document.getElementById('contact_form_email').value.trim();
    const phone = document.getElementById('contact_form_phone').value.trim();
    const message = document.getElementById('contact_form_message').value.trim();
  
    if (!name || !email || !phone || !message) {
      event.preventDefault();
      const errorElements = document.querySelectorAll('.input_field[required]:invalid');
      errorElements.forEach(function(element) {
        const errorMessage = element.getAttribute('data-error');
        const errorSpan = document.createElement('span');
        errorSpan.classList.add('error_message');
        errorSpan.textContent = errorMessage;
        const parentElement = element.parentElement;
        parentElement.appendChild(errorSpan);
      });
    }
  });


