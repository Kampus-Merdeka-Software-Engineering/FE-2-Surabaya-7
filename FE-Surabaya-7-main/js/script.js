// script.js

function swapCities() {
    var fromInput = document.getElementById('fromInput');
    var toInput = document.getElementById('toInput');

    var fromValue = fromInput.value;
    var toValue = toInput.value;

    fromInput.value = toValue;
    toInput.value = fromValue;

    console.log('Nilai "From" setelah pertukaran:', fromInput.value);
    console.log('Nilai "To" setelah pertukaran:', toInput.value);
}

function setInitialDate() {
    var dateInput = document.getElementById('dateInput');
    dateInput.value = '';
    dateInput.setAttribute('min', getTomorrowDate());
}

function getTomorrowDate() {
    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    var year = tomorrow.getFullYear();
    var month = (tomorrow.getMonth() + 1).toString().padStart(2, '0');
    var day = tomorrow.getDate().toString().padStart(2, '0');

    return year + '-' + month + '-' + day;
}

// Tambahkan fungsi untuk menyimpan data formulir ke localStorage
function saveFormDataToLocalStorage(fromValue, toValue, dateValue, passengersValue) {
    var formData = {
        from: fromValue,
        to: toValue,
        date: dateValue,
        passengers: passengersValue
    };

    localStorage.setItem('formData', JSON.stringify(formData));
}

// Tambahkan pada fungsi handleFormSubmission di index.html
function handleFormSubmission(event) {
    event.preventDefault();

    var fromValue = document.getElementById('fromInput').value;
    var toValue = document.getElementById('toInput').value;
    var dateValue = document.getElementById('dateInput').value;
    var passengersValue = document.getElementById('passengersInput').value;

    // Simpan data formulir di localStorage
    saveFormDataToLocalStorage(fromValue, toValue, dateValue, passengersValue);

    // Arahkan pengguna ke ticketSearch.html
    window.location.href = 'ticketSearch.html';
}

// Tambahkan pada fungsi displayDataInTable di ticketSearch.html
function displayDataInTable() {
    // Ambil data dari localStorage
    var storedFormData = localStorage.getItem('formData');
    if (!storedFormData) {
        return; // Tidak ada data yang disimpan di localStorage
    }

    storedFormData = JSON.parse(storedFormData);

    var fromValue = storedFormData.from;
    var toValue = storedFormData.to;
    var dateValue = storedFormData.date;
    var passengersValue = storedFormData.passengers;

    var routeHeading = document.getElementById('route');
    var detailsCell = document.getElementById('details');
    var departureInfo = document.getElementById('departureInfo');
    var arrivalInfo = document.getElementById('arrivalInfo');
    var passengerInfo = document.getElementById('passengerInfo');
    var priceTag = document.getElementById('priceTag');
    var totalPriceElement = document.getElementById('totalPrice');
    var totalPrice2Element = document.getElementById('totalPrice2');
    var totalPrice3Element = document.getElementById('totalPrice3');
    var totalPrice4Element = document.getElementById('totalPrice4');
    var priceInfoElement = document.getElementById('priceInfo');
    var priceInfo2Element = document.getElementById('priceInfo2');
    var priceInfo3Element = document.getElementById('priceInfo3');
    var priceInfo4Element = document.getElementById('priceInfo4');

    if (routeHeading && detailsCell) {
        routeHeading.innerHTML = fromValue + ' &rarr; ' + toValue;
        detailsCell.innerHTML = dateValue + '  ||  ' + passengersValue + ' Passengers  ||  Executive';
    }

    if (departureInfo && arrivalInfo && passengerInfo) {
        departureInfo.textContent = `${fromValue} | 07:00 WIB | ${dateValue}`;
        arrivalInfo.textContent = `${toValue} | 13:30 WIB | ${dateValue}`;
        departureInfo2.textContent = `${fromValue} | 09:00 WIB | ${dateValue}`;
        arrivalInfo2.textContent = `${toValue} | 15:30 WIB | ${dateValue}`;
        departureInfo3.textContent = `${fromValue} | 11:00 WIB | ${dateValue}`;
        arrivalInfo3.textContent = `${toValue} | 17:30 WIB | ${dateValue}`;
        departureInfo4.textContent = `${fromValue} | 13:00 WIB | ${dateValue}`;
        arrivalInfo4.textContent = `${toValue} | 19:30 WIB | ${dateValue}`;
        passengerInfo.textContent = `Adult (x${passengersValue})`;
        passengerInfo2.textContent = `Adult (x${passengersValue})`;
        passengerInfo3.textContent = `Adult (x${passengersValue})`;
        passengerInfo4.textContent = `Adult (x${passengersValue})`;

    }

    var totalPrice;
    if (priceTag) {
        // Ambil teks harga dan hapus karakter 'Rp' serta ',' dari string
        var priceText = priceTag.textContent.replace(/[^\d]/g, '').trim();

        // Konversi string harga ke tipe data integer
        var price = parseInt(priceText, 10);

        // Hitung total harga berdasarkan jumlah penumpang
        var passengers = parseInt(passengersValue, 10); // Konversi jumlah penumpang ke tipe data integer
        totalPrice = price * passengers;

        console.log('Total harga untuk ' + passengers + ' penumpang:', totalPrice);
            // Ubah isi elemen dengan id "totalPrice"
        if (totalPriceElement) {
            totalPriceElement.textContent = 'Rp ' + totalPrice.toLocaleString('id-ID');
        }
        if (totalPrice2Element) {
            totalPrice2Element.textContent = 'Rp ' + totalPrice.toLocaleString('id-ID');
        }
        if (totalPrice3Element) {
            totalPrice3Element.textContent = 'Rp ' + totalPrice.toLocaleString('id-ID');
        }
        if (totalPrice4Element) {
            totalPrice4Element.textContent = 'Rp ' + totalPrice.toLocaleString('id-ID');
        }        
    }

    // Ubah isi elemen dengan id "priceInfo"
    if (priceInfoElement) {
        priceInfoElement.textContent = 'Rp ' + totalPrice.toLocaleString('id-ID'); // Format harga dengan pemisah ribuan
    }
    if (priceInfo2Element) {
        priceInfo2Element.textContent = 'Rp ' + totalPrice.toLocaleString('id-ID'); // Format harga dengan pemisah ribuan
    }
    if (priceInfo3Element) {
        priceInfo3Element.textContent = 'Rp ' + totalPrice.toLocaleString('id-ID'); // Format harga dengan pemisah ribuan
    }
    if (priceInfo4Element) {
        priceInfo4Element.textContent = 'Rp ' + totalPrice.toLocaleString('id-ID'); // Format harga dengan pemisah ribuan
    }


    // Simpan total harga ke localStorage
    if (totalPrice !== undefined) {
        localStorage.setItem('totalPrice', totalPrice.toString());
    }
}
    
    
document.addEventListener('DOMContentLoaded', function () {
    // Periksa apakah halaman saat ini adalah index.html berdasarkan judul (title)
    var isIndexPage = document.title.toLowerCase().includes("home");

    if (isIndexPage) {
        // Eksekusi blok kode hanya jika halaman adalah index.html
        setInitialDate();

        var ticketSearchForm = document.getElementById('ticketSearchForm');
        ticketSearchForm.addEventListener('submit', handleFormSubmission);
    }
});

// Fungsi setInitialDate tetap sama seperti sebelumnya

// Fungsi handleFormSubmission tetap sama seperti sebelumnya

document.addEventListener('DOMContentLoaded', function () {
    displayDataInTable();
});

function myFunction(detailId) {
    // Sembunyikan semua elemen dengan class 'ticket-detail'
    var ticketDetails = document.getElementsByClassName('ticket-detail');
    for (var i = 0; i < ticketDetails.length; i++) {
        ticketDetails[i].style.display = 'none';
    }

    // Tampilkan elemen yang sesuai dengan id yang diberikan
    var selectedDetail = document.getElementById(detailId);
    if (selectedDetail) {
        selectedDetail.style.display = 'block';

        // Ubah nilai "Jakarta" dan "Surabaya" sesuai dengan inputan "from" dan "to"
        var fromInput = document.getElementById('fromInput');
        var toInput = document.getElementById('toInput');

        // Pastikan elemen ditemukan sebelum membaca properti 'value'
        var departureCity = fromInput ? fromInput.value : '';
        var arrivalCity = toInput ? toInput.value : '';

        // Ubah nilai di dalam elemen dengan ID "detail"
        var departureElement = selectedDetail.querySelector('.departure-city');
        var arrivalElement = selectedDetail.querySelector('.arrival-city');

        if (departureElement && arrivalElement) {
            departureElement.textContent = departureCity;
            arrivalElement.textContent = arrivalCity;
        }
    }
}

// Tambahkan pada akhir file script.js
function saveContactDetails(event) {
    event.preventDefault();

    var salutation = document.querySelector('input[name="salutation"]:checked').value;
    var name = document.getElementsByName('name')[0].value;
    var phoneNumber = document.getElementsByName('phone_number')[0].value;
    var email = document.getElementsByName('email')[0].value;

    var contactDetails = {
        salutation: salutation,
        name: name,
        phone_number: phoneNumber,
        email: email
    };

    // Simpan data contact details di localStorage
    localStorage.setItem('contactDetails', JSON.stringify(contactDetails));

    // Arahkan pengguna ke halaman berikutnya (jika diperlukan)
    window.location.href = 'bookconfirm.html';
}

document.addEventListener('DOMContentLoaded', function () {
    // Ambil data contact details dari localStorage
    var storedContactDetails = localStorage.getItem('contactDetails');

    // Periksa apakah data contact details tersedia
    if (storedContactDetails) {
        storedContactDetails = JSON.parse(storedContactDetails);

        // Ganti teks pada elemen-elemen tabel dengan data baru
        var fullNameElement = document.getElementById('fullName');
        var phoneNumberElement = document.getElementById('phoneNumber');
        var emailElement = document.getElementById('email');

        if (fullNameElement) {
            fullNameElement.textContent = storedContactDetails.salutation + ' ' + storedContactDetails.name;
        }

        if (phoneNumberElement) {
            phoneNumberElement.textContent = storedContactDetails.phone_number;
        }

        if (emailElement) {
            emailElement.textContent = storedContactDetails.email;
        }
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // Ambil data dari localStorage
    var storedFormData = localStorage.getItem('formData');

    // Periksa apakah data tersedia
    if (storedFormData) {
        storedFormData = JSON.parse(storedFormData);

        // Ganti teks pada elemen-elemen tabel dengan data baru
        var routeElements = document.querySelectorAll('.route');
        var passengerInfoElements = document.querySelectorAll('.passenger-info');
        var priceInfoElements = document.querySelectorAll('.price-info');
        var totalPriceElements = document.querySelectorAll('.total-price');

        routeElements.forEach(function(element) {
            element.textContent = storedFormData.from + ' - ' + storedFormData.to + ' - ' + storedFormData.date;
        });

        passengerInfoElements.forEach(function(element) {
            element.textContent = 'Adult (x' + storedFormData.passengers + ')';
        });

        priceInfoElements.forEach(function(element) {
            // Ambil harga dari localStorage
            var totalPrice = localStorage.getItem('totalPrice');

            // Ubah isi elemen dengan class "price-info"
            element.textContent = 'Rp. ' + totalPrice.toLocaleString('id-ID');
        });
        totalPriceElements.forEach(function(element) {
             // Ambil harga dari localStorage
            var totalPrice = localStorage.getItem('totalPrice');

            // Ubah isi elemen dengan class "price-info"
            element.textContent = 'Total Payment Rp. ' + totalPrice.toLocaleString('id-ID');
        });
    }
});

// Ambil elemen dengan class 'ticketSearch-time'
var timeElement = document.querySelector('.ticketSearch-time1 h2');

// Periksa apakah elemen ditemukan sebelum mencoba mengakses properti 'textContent'
if (timeElement) {
    // Ambil nilai teks dari elemen
    var timeText = timeElement.textContent;

    // Tampilkan nilai waktu
    console.log('Waktu:', timeText);
} else {
    console.log('Elemen tidak ditemukan.');
}


document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('bookconfirm');

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Menghentikan perilaku bawaan submit

            // Ambil data dari localStorage
            var formData = JSON.parse(localStorage.getItem('formData'));
            var contactDetails = JSON.parse(localStorage.getItem('contactDetails'));
            var totalPrice = localStorage.getItem('totalPrice');

            // Log data sebelum dikirim
            console.log('formData:', formData);
            console.log('contactDetails:', contactDetails);
            console.log('totalPrice:', totalPrice);

            // Panggil sendData untuk mengirim data
            sendData(formData, contactDetails, totalPrice);
        });
    }

// Fungsi untuk mengirim data
function sendData(formData, contactDetails, totalPrice) {
    // Lakukan permintaan fetch
    fetch('https://test-be-surabaya-7-production.up.railway.app/bookconfirm', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            from: formData.from,
            to: formData.to,
            date: formData.date,
            passengers: formData.passengers,
            salutation: contactDetails.salutation,
            name: contactDetails.name,
            phone_number: contactDetails.phone_number,
            email: contactDetails.email,
            totalPrice: totalPrice
        })
    })
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Gagal mendapatkan respons JSON");
        }
    })
    .then((data) => {
        if (data.message) {
            // Menampilkan pesan dari server dengan nomor registrasi
            const registrationNumber = data.message.split(" ").pop();
            const successMessage = document.getElementById("success-message");
            const registrationNumberSpan = document.getElementById("registration-number");

            registrationNumberSpan.textContent = registrationNumber;
            successMessage.classList.remove("hidden");
            // Hapus item dari localStorage setelah berhasil terkirim
            localStorage.removeItem('formData');
            localStorage.removeItem('contactDetails');
            localStorage.removeItem('totalPrice');
        } else {
            throw new Error("Pesan tidak ditemukan dalam respons");
        }
    })
    .catch((error) => {
        console.error("Terjadi kesalahan:", error);
    });
}
});

//navbar responsive 
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
