function showPage(pageId) {
  
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.classList.remove('active'));
  
  // すべてのボタンの選択状態を解除
  const buttons = document.querySelectorAll('.nav-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  
  // 指定されたページを表示
  document.getElementById(pageId).classList.add('active');
  
  // クリックされたボタンを選択状態にする
  event.target.classList.add('active');
}
