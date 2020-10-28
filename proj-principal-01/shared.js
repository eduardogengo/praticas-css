var backdrop = document.querySelector('.backdrop');
var selectPlanButtons = document.querySelectorAll('.plan button')
var modal = document.querySelector('.modal')
var toggleButton = document.querySelector('.toggle-button')
var mobileNav = document.querySelector('.mobile-nav')

var optionNo = document.querySelector('.modal__actions .modal__action--negative')

for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', () => {
        modal.classList.add('open')
        backdrop.classList.add('open')
    })
}

if (optionNo) optionNo.addEventListener('click', closeModal)

backdrop.addEventListener('click', function () {
    mobileNav.classList.remove('open')
    closeModal();
})

function closeModal() {
    if (modal) modal.classList.remove('open')
    backdrop.classList.remove('open')
}

toggleButton.addEventListener('click', function () {
    mobileNav.classList.add('open')
    backdrop.classList.add('open')
})