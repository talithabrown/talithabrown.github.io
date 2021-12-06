
const images = document.querySelectorAll('.gallery-images');

let imageOptions = {}

let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const image = entry.target;
    const newImg = image.getAttribute('data-src');
    image.src = newImg
    observer.unobserve(image);
  });
}, imageOptions)

images.forEach((image) => {
  observer.observe(image)
});