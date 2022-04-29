
const SLIDE_TIMEOUT_SECONDS = 7 * 1000;
  const rotateImage = (current) => {
    let imgs = document.querySelectorAll('.about-splash .main');
    let bubbles = document.querySelectorAll('.phone-bubble');
    bubbles.forEach((e) => {
      if (current == imgs.length - 1) {
        e.classList.remove('dim');
      } else {
        e.classList.add('dim');
        e.classList.remove('highlight');
      }
    });
    if(imgs[current]) {
        imgs[current].classList.add('hide');
        imgs[current].classList.remove('show');
    }
     if(bubbles[current]) {
       bubbles[current].classList.remove('dim');
       bubbles[current].classList.add('highlight');
    }
    let next = current + 1;
    if (next >= imgs.length) {
      next = 0;
    }
    if(imgs[next]) {
      imgs[next].classList.add('show');
      imgs[next].classList.remove('hide');
    }
    nextImg = next;
    waiter = setTimeout(() => rotateImage(next), SLIDE_TIMEOUT_SECONDS);
     };


  const show = (e) => {
    let id = e.target.dataset.id;
    if (id === 'goodrx') return;

    let bubbles = document.querySelectorAll('.phone-bubble');
    bubbles.forEach((b) => {
      b.classList.add('dim');
    });

    e.target.classList.add('highlight');
    e.target.classList.remove('dim');
    clearTimeout(waiter);
    let img = document.getElementById(id);
    img.classList.remove('hide');
    img.classList.add('highlight');
  };

  const resume = (e) => {
    let id = e.target.dataset.id;
    if (id === 'goodrx') return;

    let bubbles = document.querySelectorAll('.phone-bubble');
    bubbles.forEach((b) => {
      b.classList.remove('dim');
      b.classList.remove('highlight');
    });

    let img = document.getElementById(id);
    img.classList.remove('highlight');
    img.classList.add('hide');

    let imgs = document.querySelectorAll('.about-splash .main');

    imgs[0].classList.add('show');
    imgs[0].classList.remove('hide');

    waiter = setTimeout(() => rotateImage(0), SLIDE_TIMEOUT_SECONDS);
  };

    let bubbles = document.querySelectorAll('.phone-bubble');
    bubbles.forEach((e) => {
       e.addEventListener('mouseout', resume);
       e.addEventListener('mouseover', show);
       e.addEventListener('click', show);
     });


    waiter = setTimeout(() => rotateImage(0), SLIDE_TIMEOUT_SECONDS);
