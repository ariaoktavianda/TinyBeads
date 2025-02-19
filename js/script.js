// toggle class activee
const navBarNav = document.querySelector('.navbar-nav');
//kategori diklik
document.querySelector('#kategori').onclick = () => {
  navBarNav.classList.toggle('active');
};
//klik bebas
const kategori = document.querySelector('#kategori');
document.addEventListener('click', function (e) {
  if (!kategori.contains(e.target) && !navBarNav.contains(e.target)) {
    navBarNav.classList.remove('active');
  }
});
