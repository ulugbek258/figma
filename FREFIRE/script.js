let currentPage = 0;
const pages = document.querySelectorAll('.manga-page');
const totalPages = pages.length;

function showPage(pageIndex) {
  // Har bir sahifani yashirish
  pages.forEach((page, index) => {
    page.classList.remove('active', 'prev', 'next');
    if (index === pageIndex) {
      page.classList.add('active');
    } else if (index === pageIndex - 1) {
      page.classList.add('prev');
    } else if (index === pageIndex + 1) {
      page.classList.add('next');
    }
  });
}

// Oldingi sahifaga o'tish
document.getElementById('prevBtn').addEventListener('click', () => {
  currentPage = (currentPage - 1 + totalPages) % totalPages;
  showPage(currentPage);
});

// Keyingi sahifaga o'tish
document.getElementById('nextBtn').addEventListener('click', () => {
  currentPage = (currentPage + 1) % totalPages;
  showPage(currentPage);
});

// Initial sahifa ko'rsatilishi
showPage(currentPage);

// Sahifalar orasida avtomatik ravishda o'zgarish (scroll) qo'shish
document.addEventListener('wheel', (e) => {
  if (e.deltaY > 0) {
    currentPage = (currentPage + 1) % totalPages;  // pastga o'rgatish
  } else {
    currentPage = (currentPage - 1 + totalPages) % totalPages;  // yuqoriga o'rgatish
  }
  showPage(currentPage);
});

// O'ng va chapga surish (touch event)
let startX = 0;
document.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

document.addEventListener('touchend', (e) => {
  let endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) {
    // O'ngdan chapga surish - Keyingi sahifa
    currentPage = (currentPage + 1) % totalPages;
  } else if (endX - startX > 50) {
    // Chapdan o'ngga surish - Oldingi sahifa
    currentPage = (currentPage - 1 + totalPages) % totalPages;
  }
  showPage(currentPage);
});
