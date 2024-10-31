function addToCart(productName) {
    alert(`${productName} berhasil ditambahkan ke keranjang!`);
}
// carousel.js

const items = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function showNextItem() {
    // Hapus kelas 'active' dari item saat ini
    items[currentIndex].classList.remove('active');
    console.log(`Removing active from item ${currentIndex}`);  // Debugging log

    // Pindah ke item berikutnya
    currentIndex = (currentIndex + 1) % items.length;

    // Tambahkan kelas 'active' ke item berikutnya
    items[currentIndex].classList.add('active');
    console.log(`Adding active to item ${currentIndex}`);  // Debugging log
}

// Setel interval untuk berpindah item setiap 3 detik
setInterval(showNextItem, 3000);

// Tambahkan kelas 'active' ke item pertama saat halaman dimuat
items[currentIndex].classList.add('active');
