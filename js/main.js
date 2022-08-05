if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = function (callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
		}
	};
}

const burger = document.querySelector('.header__burger'),
    burgerLink = document.querySelector('.burger-btn'),
    sidebar = document.querySelector('.sidebar')


burgerLink.addEventListener('click', (e) => {
    e.preventDefault();
})

// Появление сайдбара
burger.addEventListener('click', () => {
    burger.classList.toggle('header__burger--active')
    sidebar.classList.toggle('sidebar--active')
    // Отмена скрола у БОДИ
    if(sidebar.classList.contains('sidebar--active')){
        document.querySelector('body').style.overflow = 'hidden';
    }else{
        document.querySelector('body').style.overflow = 'scroll';
    }
});


// Добавляем карточки
const btnShowCart = document.querySelector('.more-btn'),
    cartHidden = document.querySelectorAll('.cart__link--hidden');

btnShowCart.addEventListener('click',showCartMore);

function showCartMore(){
    cartHidden.forEach(function(card){
        card.classList.toggle('cart__link--hidden--active')
        if(card.classList.contains('cart__link--hidden--active')){
            btnShowCart.textContent = 'Скрыть';
        }else{
            btnShowCart.textContent = 'Показать ещё';
        }
    });
}


// WIDGETS
const widgets = document.querySelectorAll('.widget');

widgets.forEach(el => {
    el.addEventListener('click',(e) => {
        if(e.target.classList.contains('widget__title')){
            e.target.classList.toggle('widget__title--active')
            el.querySelector('.widget__body').classList.toggle('widget__body--active')
        }
    });
});

// Location
const checboxAny = document.querySelector('#location-05'),
    topLocationChecbox = document.querySelectorAll('[data-location-param]');

checboxAny.addEventListener('change', (e) => {
    if(checboxAny.checked){
        topLocationChecbox.forEach(el => {
            el.checked = false;
        }); 
        checboxAny.checked = true;
    }
});
topLocationChecbox.forEach(el => {
    el.addEventListener('change', () => {
        checboxAny.checked = false;
    })
})


// 

const moreBtn = document.querySelector('.widget__link-show-more'),
    moreCheckboxElem = document.querySelectorAll('.custom-element--hidden')

moreBtn.addEventListener('click',(e) => {
    e.preventDefault();
    moreCheckboxElem.forEach(el => {
        el.classList.toggle('custom-element--hidden--active');
        if(el.classList.contains('custom-element--hidden--active')){
            moreBtn.textContent = 'Скрыть';
        }else{
            moreBtn.textContent = 'Показать ещё';
        }
    })
});
