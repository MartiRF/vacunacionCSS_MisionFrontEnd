let botonMenuRef = document.getElementById('btn_menu') 
let menuRef = document.getElementById('btns-options')

botonMenuRef.addEventListener('click',() => {
    menuRef.style.display = 'flex'
})
menuRef.addEventListener('click', () => {
    menuRef.style.display = 'none'
})