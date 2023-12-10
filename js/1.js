// document.getElementById('contact_form').addEventListener('submit', function(event) {
//     const name = document.getElementById('contact_form_name').value.trim();
//     const email = document.getElementById('contact_form_email').value.trim();
//     const phone = document.getElementById('contact_form_phone').value.trim();
//     const message = document.getElementById('contact_form_message').value.trim();
  
//     if (!name || !email || !phone || !message) {
//       event.preventDefault();
//       const errorElements = document.querySelectorAll('.input_field[required]:invalid');
//       errorElements.forEach(function(element) {
//         const errorMessage = element.getAttribute('data-error');
//         const errorSpan = document.createElement('span');
//         errorSpan.classList.add('error_message');
//         errorSpan.textContent = errorMessage;
//         const parentElement = element.parentElement;
//         parentElement.appendChild(errorSpan);
//       });
//     }
//   });

// function init(){
//     document.getElementById('payButton').onclick = function() {
//         Swal.fire({
//             title: "Payment Secured!",
//             text: "Your transaction is complete and your booking is confirmed.",
//             icon: "success"
//         }).then((result)=>{
//             if(result.value){
//                 window.location.href = 'home.html';
//             }
//         });
//     };
// }
// document.addEventListener("DOMContentLoaded", init);

// function myFunction(detailID){
//     var x = document.getElementById(detailID);
//     if (x.style.display === "none"){
//         x.style.display = "block";
//     }else{
//         x.style.display = "none";
//     }
// }

// var currentDetail = null;

// function myFunction(divId) {
//     var x = document.getElementById(divId);

//     if (currentDetail !== null && currentDetail !== x) {
//         currentDetail.style.display = "none";
//     }

//     x.style.display = (x.style.display === "none" || x.style.display === "") ? "block" : "none";
//     currentDetail = x;
// }