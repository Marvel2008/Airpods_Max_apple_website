const chooseColor= document.querySelectorAll(".choose__color-btn");
const contentItem= document.querySelectorAll(".content-item");


chooseColor.forEach((elem)=>{
    elem.addEventListener('click',open);
});
/*При натискані з початку повинен добавлятися клас active та пропадав*/
function open(event){
    const target = event.currentTarget;/*Поймемо по кому ми клікнули */
    const button = target.dataset.button;
    const contentActive = document.querySelectorAll(`.${button}`);

    chooseColor.forEach((item)=>{
        item.classList.remove("choose__color-btn--active");
    });
    target.classList.add("choose__color-btn--active");

    contentItem.forEach((item)=>{
        item.classList.remove("content-item__active");
    });

    contentActive.forEach((item)=>{
        item.classList.add("content-item__active");
    });

}
