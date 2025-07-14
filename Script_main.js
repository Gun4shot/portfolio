function showSidebar(){
  const sidebar=document.querySelector('.sidebar')
  sidebar.style.display='flex'
  
}
function hideSidebar(){
  document.querySelector('.sidebar').style.display='none'
  
}
function showbar(){
  document.querySelector('.child2_tviewbtn').style.display='block'
  document.querySelector('.child1_tviewbtn').style.borderTopLeftRadius="5px"
  document.querySelector('.child1_tviewbtn').style.borderBottomLeftRadius="5px"
  document.querySelector('.child1_tviewbtn').style.borderBottomRightRadius="0px"
  document.querySelector('.child1_tviewbtn').style.borderTopRightRadius="0px"
  
}

function hidebar(){
  document.querySelector('.child2_tviewbtn').style.display='none'
  document.querySelector('.child1_tviewbtn').style.borderTopLeftRadius="50%"
  document.querySelector('.child1_tviewbtn').style.borderBottomLeftRadius="50%"
  document.querySelector('.child1_tviewbtn').style.borderBottomRightRadius="50%"
  document.querySelector('.child1_tviewbtn').style.borderTopRightRadius="50%"
}  

const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 3.8,
      centeredSlides: true,
      spaceBetween: 30,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

  

  

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
