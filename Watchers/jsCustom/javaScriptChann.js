document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector('#top-nav input[type="text"]');
    const path = window.location.pathname;

    const isOnHomePage = path.includes("homePage.html");
    const isOnSearchPage = path.includes("searchResult.html");

    // Home
    if (isOnHomePage && searchInput) {
        searchInput.addEventListener('focus', () => {
            window.location.href = 'searchResult.html';
        });
    }

    // searchResult.html
    if (isOnSearchPage && searchInput) {
        searchInput.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
                const keyword = searchInput.value.trim();
                localStorage.setItem('searchKeyword', keyword);
                if (keyword.toLowerCase().includes("drama")) {
                    e.preventDefault();
                    window.location.href = 'searchResultDrama.html';
                }
            }
        });
    }

    // tampilkan keyword jika ada di localStorage
    if (searchInput) {
        const savedKeyword = localStorage.getItem('searchKeyword');
        if (savedKeyword) {
            searchInput.value = savedKeyword;
        }
    }

    // ➤ Play video
    const playIcon = document.getElementById('playButtonIcon');
    const thumbnail = document.getElementById('thumbnailImage');
    const videoWrapper = document.getElementById('videoWrapper');
    const localVideo = document.getElementById('localVideo');

    if (playIcon && thumbnail && videoWrapper && localVideo) {
        playIcon.addEventListener('click', function () {
            thumbnail.style.display = 'none';
            playIcon.style.display = 'none';
            videoWrapper.classList.remove('d-none');
            localVideo.currentTime = 0;
            localVideo.play();
        });
    }
});
