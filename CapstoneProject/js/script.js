document.addEventListener("DOMContentLoaded", function() {
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
});

function init(){
    document.getElementById('payButton').onclick = function() {
        Swal.fire({
            title: "Payment Secured!",
            text: "Your transaction is complete and your booking is confirmed.",
            icon: "success"
        }).then((result)=>{
            if(result.value){
                window.location.href = 'home.html';
            }
        });
    };
}
document.addEventListener("DOMContentLoaded", init);

function myFunction(detailID){
    var x = document.getElementById(detailID);
    if (x.style.display === "none"){
        x.style.display = "block";
    }else{
        x.style.display = "none";
    }
}

var currentDetail = null;

function myFunction(divId) {
    var x = document.getElementById(divId);

    if (currentDetail !== null && currentDetail !== x) {
        currentDetail.style.display = "none";
    }

    x.style.display = (x.style.display === "none" || x.style.display === "") ? "block" : "none";
    currentDetail = x;
}

document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');

    hamburger.addEventListener('click', function () {
        nav.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            nav.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

function validateLoginForm(){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('/login',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({username, password}),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success){
            alert('Welcome, ${data.user.username}!');
        }else{
            alert(data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
document.addEventListener('DOMContentLoaded', function () {
    // Function to get the value of a specific query parameter from the URL
    function getQueryParam(parameter) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(parameter);
    }

    // Parse parameters as integers, default to 0 if not present
    const totalPassengers = parseInt(getQueryParam('totalPassengers')) || 0;
    const price = parseInt(getQueryParam('price')) || 0;

    // Calculate the total price
    const totalPrice = totalPassengers * price;

    // Update the content based on the parameters
    document.getElementById('totalPassengers').innerText = `${totalPassengers} Passengers`;
    document.getElementById('price').innerText = `Rp ${price}/pax`; // Assuming 'price' is the price per passenger
    document.getElementById('totalPayment').innerHTML = `<h1>Rp ${totalPrice}</h1>`;
});
document.addEventListener('DOMContentLoaded', function () {
    // Function to get the value of a specific query parameter from the URL
    function getQueryParam(parameter) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(parameter);
    }

    // Function to filter results based on the 'from' and 'to' values
    function filterTickets() {
        const from = getQueryParam('from');
        const to = getQueryParam('to');

        const ticketContainers = document.querySelectorAll('.ticketSearch');
        ticketContainers.forEach(function (container) {
            const routeHeader = container.querySelector('tr:nth-child(3) td').innerText;
            if (routeHeader.includes(from) && routeHeader.includes(to)) {
                container.style.display = 'block';
            } else {
                container.style.display = 'none';
            }
        });
    }

    // Initial filtering when the page loads
    filterTickets();
});

document.addEventListener('DOMContentLoaded', function () {
    // Function to get the value of a specific query parameter from the URL
    function getQueryParam(parameter) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(parameter);
    }

    const from = getQueryParam('from');
    const to = getQueryParam('to');
    const date = getQueryParam('date');
    const totalPassengers = getQueryParam('totalPassengers'); // Update the parameter name
    const seatClass = getQueryParam('seat');

    // Update searchBox content based on form values
    document.getElementById('searchBox-route').innerText = `${from} \u2192 ${to}`;
    document.getElementById('searchBox-date').innerText = `${date} || ${totalPassengers} Passengers || ${seatClass}`;
    document.getElementById('totalPass').innerText = `${totalPassengers} Passengers`;
});
document.addEventListener('DOMContentLoaded', function () {
    // Function to get the value of a specific query parameter from the URL
    function getQueryParam(parameter) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(parameter);
    }

    // For the first ticket search section
    const totalPassengers = getQueryParam('totalPassengers');
    document.getElementById('totalPass').innerText = `Total Passengers: ${totalPassengers}`;

    const selectButton = document.getElementById('selectButton');
    selectButton.addEventListener('click', function () {
        const priceText = document.getElementById('price').innerText;
        const price = priceText.replace(/\D/g, '');
        window.location.href = `bookform.html?from=Jakarta&to=Surabaya&date=Mon,%206%20November%202023&time=06:00-05:30&duration=23h30m&durationType=Direct&totalPassengers=${totalPassengers}&price=${price}`;
    });

    // For the second ticket search section
    const totalPassengers2 = getQueryParam('totalPassengers');
    document.getElementById('totalPass2').innerText = `Total Passengers: ${totalPassengers2}`;

    const selectButton2 = document.getElementById('selectButton2');
    selectButton2.addEventListener('click', function () {
        const priceText2 = document.getElementById('price2').innerText;
        const price2 = priceText2.replace(/\D/g, '');
        window.location.href = `bookform.html?from=Surabaya&to=Jakarta&date=Mon,%206%20November%202023&time=06:00-05:30&duration=23h30m&durationType=Direct&totalPassengers=${totalPassengers2}&price=${price2}`;
    });
    // For the third ticket search section
    const totalPassengers3 = getQueryParam('totalPassengers');
    document.getElementById('totalPass3').innerText = `Total Passengers: ${totalPassengers3}`;

    const selectButton3 = document.getElementById('selectButton3');
    selectButton3.addEventListener('click', function () {
        const priceText3 = document.getElementById('price3').innerText;
        const price3 = priceText3.replace(/\D/g, '');
        window.location.href = `bookform.html?from=Jakarta&to=Palembang&date=Mon,%206%20November%202023&time=06:00-05:30&duration=23h30m&durationType=Direct&totalPassengers=${totalPassengers3}&price=${price3}`;
    });
    // For the fourth ticket search section
    const totalPassengers4 = getQueryParam('totalPassengers');
    document.getElementById('totalPass4').innerText = `Total Passengers: ${totalPassengers4}`;

    const selectButton4 = document.getElementById('selectButton4');
    selectButton4.addEventListener('click', function () {
        const priceText4 = document.getElementById('price4').innerText;
        const price4 = priceText4.replace(/\D/g, '');
        window.location.href = `bookform.html?from=Jakarta&to=Palembang&date=Mon,%206%20November%202023&time=06:00-05:30&duration=23h30m&durationType=Direct&totalPassengers=${totalPassengers4}&price=${price4}`;
    });
});
