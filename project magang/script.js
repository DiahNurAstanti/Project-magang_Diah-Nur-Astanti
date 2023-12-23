document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");
    let lastScrollTop = 0;

    window.addEventListener("scroll", function () {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scrolling down
            navbar.classList.add("hidden");
        } else {
            // Scrolling up
            navbar.classList.remove("hidden");
        }

        if (scrollTop === 0) {
            navbar.classList.remove("hidden");
        }

        lastScrollTop = scrollTop;
    });
});


 // Logika untuk mengubah jumlah card yang ditampilkan dan mengurutkannya
 const perPageSelect = document.getElementById('perPage');
 const sortSelect = document.getElementById('sort');
 const cardContainer = document.getElementById('cardContainer');

 perPageSelect.addEventListener('change', updatePage);
 sortSelect.addEventListener('change', updatePage);

 function updatePage() {
   const perPage = perPageSelect.value;
   const sort = sortSelect.value;

   // Lakukan pemrosesan data sesuai dengan perPage dan sort
   // ...

   // Hapus semua card yang ada sekarang
   cardContainer.innerHTML = '';

   // Tambahkan card sesuai dengan hasil pemrosesan data
   // ...

   // Contoh penambahan card
   for (let i = 0; i < perPage; i++) {
     const card = document.createElement('div');
     card.className = 'card';
     card.innerHTML = `
       <img src="https://placekitten.com/300/${200 + i}" alt="Kitten">
       <p>${i + 1} SEPTEMBER 2022</p>
       <h3>Kenali Tingkatan influencers berdasarkan jumlah Followers ${i + 1}</h3>
       
     `;
     cardContainer.appendChild(card);
   }
 }

 // Inisialisasi halaman pertama
 updatePage();