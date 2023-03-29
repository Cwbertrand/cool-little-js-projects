const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)
checkBoxes()
function checkBoxes(){
    const triggerPoint = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        //getBoundingClientRect() is a method that provides information concerning an element e.g size, height, position
        const boxTop = box.getBoundingClientRect().top
        if(boxTop < triggerPoint){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })
}