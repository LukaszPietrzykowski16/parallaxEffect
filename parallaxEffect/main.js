let path = document.querySelector('path');
let pathLength = path.getTotalLength();


path.style.strokeDasharray = pathLength + ' ' + pathLength;

path.style.strokeDasharray = pathLength;

window.addEventListener('scroll', () => {
    // svg effect 
    let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    
    let drawLength = pathLength * scrollPercentage;

    path.style.strokeDashoffset = pathLength - drawLength;

    // parallax effect
    
    const target = document.querySelectorAll('.string');

    for (let i= 0; i < target.length; i++) {
        let bruh = window.scrollY * target[i].dataset.rate;
        console.log(bruh)
        target[i].style.transform = `translate3d(0px, ${bruh}px, 0px)`;
    }
    // circle effect 
    
    // letters
    const circle = document.querySelector('.circle')
 
    let valueNumber = window.scrollY * 0.4;

    circle.style.transform = `rotate(${valueNumber}deg)`;

    // squares 

    const elementOne = document.querySelector('.element-1')
    const elementTwo = document.querySelector('.element-2')
    const elementThree = document.querySelector('.element-3')


    elementOne.style.transform = `rotate(${window.scrollY * 0.7}deg)`
    elementTwo.style.transform = `rotate(${window.scrollY * 0.1}deg)`
    elementThree.style.transform = `rotate(${window.scrollY * 0.4}deg)`
 
})


