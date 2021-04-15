'use strict'

// 上に戻るボタンの表示切り換え
const toTop = document.getElementById('to-top');
const pxChange = 1;

window.addEventListener('scroll', function(e) {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > pxChange) {
    toTop.classList.add('fadein');
  } else {
    toTop.classList.remove('fadein');
  }
});

// スクロール
toTop.addEventListener('click', () => {
  window.scrollTo({
    top:0,
    behavior: 'smooth'
  })
  return false;
});