const animationMove = function(selector){
const targetEl = document.querySelector(selector);
const browserScrollY = window.pageYOffset;
const targerScrollY = targetEl.getBoundingClientRect().top + browserScrollY;

console.log(`el sy : ${targetEl.getBoundingClientRect().top}`)

window.scrollTo({ top: targerScrollY, behavior: 'smooth'});
};

const scrollMoveEl = document.querySelectorAll("[data-animation-scroll='true']");
for(let i = 0; i <scrollMoveEl.length; i++){
    scrollMoveEl[i].addEventListener('click', function(e){
        const taget = this.dataset.taget;
        animationMove(taget);
    });
}