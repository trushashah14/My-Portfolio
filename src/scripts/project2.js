
export default function projectcard2() {
const wrapper1 = document.querySelector('.cards-wrapper1');
// console.log(wrapper.clientWidth);

// grab the dots
const dots1 = document.querySelectorAll('.dot1');
// the default active dot num which is array[0]
let activeDotNum1 = 0;

dots1.forEach((dot1, idx1) => {  
//   number each dot according to array index
  dot1.setAttribute('data-num', idx1);
  
//   add a click event listener to each dot
  dot1.addEventListener('click', (e) => {
    
    let clickedDotNum1 = e.target.dataset.num;
    // console.log(clickedDotNum);
//     if the dot clicked is already active, then do nothing
    if(clickedDotNum1 == activeDotNum1) {
      // console.log('active');
      return;
    }
    else {
      // console.log('not active');
      // shift the wrapper
      let displayArea1 = wrapper1.parentElement.clientWidth;
      // let pixels = -wrapper.clientWidth * clickedDotNum;
      let pixels1 = -displayArea1 * clickedDotNum1
      wrapper1.style.transform = 'translateX('+ pixels1 + 'px)';
//       remove the active class from the active dot
      dots1[activeDotNum1].classList.remove('active');
//       add the active class to the clicked dot
      dots1[clickedDotNum1].classList.add('active');
//       now set the active dot number to the clicked dot;
      activeDotNum1 = clickedDotNum1;
    }
    
  });
});
}