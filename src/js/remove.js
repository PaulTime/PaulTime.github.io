import 'jquery';

export default function remove(elemDOM, number, container) {
	elemDOM.remove();
	//container.reverse();
	
	//container.reverse();
	let index = container.findIndex((elem) => {
								return elem.number == number;
							});
	
	container.splice(index, 1);

	return container;
};