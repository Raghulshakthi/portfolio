const navList = document.querySelector('.navList')
const navBtn = document.querySelector('.navBtn')
const navLinks = document.querySelectorAll('.navLi')


navBtn.addEventListener('click', () => {
  // toggle navList on navBtn btn click
  navList.classList.toggle('navActive');

  // li elements fade in
  // index(position in array) passed as 2nd argument by forEach()
  navLinks.forEach((item, index) => {
    const delay = index / 10 + 0.05;
    // console.log(delay)
    item.style.transition = `all 0.5s ease-in ${delay}s`
    item.classList.toggle('fadeIn');
  })

  // toggle navBtn three horizantle lines into X and back
  navBtn.classList.toggle('navBtnToggle');

})

//show
function load(){
  document.querySelectorAll(".progress").forEach(function(current){
    let startwidth=0;
    const endwidth=current.dataset.size;
    const time=setInterval(frame ,20);

    function frame(){
      if(statwidth>=endwidth){
        clearInterval(time)
      }
      else{
        startwidth++;
        current.style.width=`${endwidth}%`;
        current.firstElementChild.innerHTML=`${startwidth}%`;
      }
    }

  })
}
load();
// document.querySelector('a').addEventListener('click',load,{once:true}) 