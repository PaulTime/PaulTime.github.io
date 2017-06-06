import 'jquery';

import MakeStore from './store'

 
let store = new MakeStore(); 


$('.page-main__top-wrapper__form__submit').on('click', (e) => {
	let taskName = $('.page-main__top-wrapper__form__task-name')[0];
	let description = $('.page-main__top-wrapper__form__description')[0];
	
	if (taskName.value == false || description.value == false) {
		alert('You must do something');
		return
	};


	store.addTask(
		[taskName.value, description.value],
		$('.page-main__root-wrapper__target')
	);
	
	taskName.value = '';
	description.value = '';

});


$('.page-main__root-wrapper__target').on('click', (e) => {
	let target = $(e.target);

  while (target.attr('class') != 'page-main__root-wrapper__target') {
    if (target.attr('class') == 'target__task__remove') {
			store.removeTask(target.parent(), target.parent().attr('data-number'));
      return;
    }
    target = target.parent();
  }
});

$('.page-main__top-wrapper__aside-form__submit').on('click', (e) => {
	let nameChecked = $('.page-main__top-wrapper__aside-form__sort-name')[0].checked;
	let numberChecked = $('.page-main__top-wrapper__aside-form__sort-number')[0].checked;
	const targetContainer = $('.page-main__root-wrapper__target');
	
	if (nameChecked) {
		store.sortTasks('name', targetContainer);
	} else if (numberChecked) {
		store.sortTasks('number', targetContainer);
	};
	return;
});


$(window).on('scroll', (e) => {
	let scrolled = window.pageYOffset || document.documentElement.scrollTop;
	if( scrolled > 100) {
		$('.page-anchor').css('right', '20px');
	}
	else {
		$('.page-anchor').css('right', '-70px');	
	}
});

$('.page-anchor').on('click', (e) => {
	window.scrollTo(0, 0);
	console.log('click');
});