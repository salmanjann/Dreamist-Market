const bar = document.querySelector('.bar');
const close = document.querySelector('.close');
const nav = document.querySelector('#navList')

if(bar){
    bar.addEventListener('click',() =>{
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click',() =>{
        nav.classList.remove('active');
    })
}

// WORKING FOR SINGLE PRODUCT
// Select all elements with the same class name
const elements = document.querySelectorAll('.fpBox');

// Add an event listener to each selected element
elements.forEach(element => {
  element.addEventListener('click', function() {
    // Find the img tag within the clicked div
    const img = element.querySelector('img');

    // Check if an img tag was found
    if (img) {
      const imgSrc = img.getAttribute('src');
      localStorage.setItem('spImgSrc',imgSrc);
    }
    const descDiv = document.querySelector('.fpBoxDescription');
    if(descDiv){
    // Find the h5 tag within the clicked div
    const h5 = element.querySelector('h5');

    // Check if an h5 tag was found
    if (h5) {
      const prodName = h5.innerText;
      localStorage.setItem('prodName',prodName);
      console.log(prodName);
    }
    // Find the h4 tag within the clicked div
    const h4 = element.querySelector('h4');

    // Check if an h4 tag was found
    if (h4) {
      const prodPrice = h4.innerText;
      localStorage.setItem('prodPrice',prodPrice);
    }
    window.location.href = 'singleProduct.html';
  }
  });
});

