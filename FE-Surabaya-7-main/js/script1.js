'use strict';

// Deklarasikan variabel fromCity dan toCity di tingkat file
let fromCity = '';
let toCity = '';

// Fungsi untuk mengatur nilai variabel fromCity dan toCity setelah pertukaran
function setCityValues() {
    // Dapatkan nilai input setelah swap jika elemen ditemukan
    const fromInput = document.getElementById('fromInput');
    const toInput = document.getElementById('toInput');

    if (fromInput && toInput) {
        fromCity = fromInput.value;
        toCity = toInput.value;
    }
}

// Fungsi untuk pertukaran nilai "From" dan "To"
function swapCities() {
    const fromInput = document.getElementById('fromInput');
    const toInput = document.getElementById('toInput');

    // Pastikan elemen ditemukan sebelum mengakses nilai
    if (fromInput && toInput) {
        // Simpan nilai dari elemen input ke dalam variabel sementara
        const fromValue = fromInput.value;
        const toValue = toInput.value;

        // Tukar nilai variabel
        [fromCity, toCity] = [toCity, fromCity];

        // Setelah pertukaran nilai, perbarui nilai elemen input
        fromInput.value = fromCity;
        toInput.value = toCity;

        // Panggil fungsi untuk set nilai variabel fromCity dan toCity
        setCityValues();

        // Perbarui nilai minimal pada elemen tanggal setelah pertukaran
        updateMinDate();

        // Setelah pertukaran nilai, perbarui nilai elemen HTML
        setElementValue('fromInput', fromCity);
        setElementValue('toInput', toCity);

        // Tetapkan nilai pada elemen dalam tabel setelah pertukaran
        setTextContent('fromToText', `${fromCity} \u2192 ${toCity}`);

        // Console.log setelah pertukaran untuk memastikan nilai telah berubah
        console.log('fromCity:', fromCity);
        console.log('toCity:', toCity);
    }
}

// Fungsi untuk menetapkan nilai pada elemen HTML
function setElementValue(id, value) {
    const element = document.getElementById(id);
    if (element) {
        element.value = value;
    }
}

// Fungsi untuk menetapkan teks pada elemen HTML
function setTextContent(id, text) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = text;
    }
}

// Fungsi untuk mendapatkan nilai parameter dari URL
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
    const results = regex.exec(url);
    return results ? decodeURIComponent(results[2].replace(/\+/g, " ")) : null;
}

// Fungsi untuk menetapkan nilai minimal pada elemen tanggal
function updateMinDate() {
    const dateInput = document.getElementById('dateInput');
    
    // Pastikan elemen ditemukan sebelum mengakses propertinya
    if (dateInput) {
        const currentDate = new Date();
        dateInput.min = currentDate.toISOString().split('T')[0];
    }
}

// Fungsi untuk menetapkan nilai awal pada elemen HTML
function setInitialValues() {
    console.log('setInitialValues is called'); // Tambahkan ini

    // Dapatkan nilai parameter dari URL dengan memberikan nilai default
    const date = getParameterByName('dateInput') || '';
    const passengers = getParameterByName('passengersInput') || '1';

    // Jika nilai setelah swap sudah ada, gunakan nilai tersebut
    const fromInput = document.getElementById('fromInput');
    const toInput = document.getElementById('toInput');
    if (fromInput && toInput) {
        fromCity = fromInput.value;
        toCity = toInput.value;
    }

    // Menetapkan nilai pada elemen HTML
    setElementValue('fromInput', fromCity);
    setElementValue('toInput', toCity);
    setElementValue('dateInput', date);
    setElementValue('passengersInput', passengers);

    // Tetapkan nilai pada elemen dalam tabel
    setTextContent('fromToText', `${fromCity} \u2192 ${toCity}`);
    setTextContent('datePassengersText', `${date}  ||  ${passengers} Passengers  ||  Executive`);
    // Console.log setelah pertukaran untuk memastikan nilai telah berubah
    console.log('fromCity:', fromCity);
    console.log('toCity:', toCity);
    console.log('fromToText:', document.getElementById('fromToText').textContent);
}

// Fungsi utama yang akan dijalankan setelah DOM dimuat
document.addEventListener('DOMContentLoaded', function () {
    setInitialValues();
});
