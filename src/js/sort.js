import 'jquery';
import addSort from './addSort';

function cmp(a, b){   
    return (a<b?-1:(a>b?1:0));  
};

export default function sort(type, targetContainer, container){
	if (type == 'name') {
		container.sort((a, b) => {
			return cmp(a.taskName, b.taskName);
		})
	} else if (type == 'number') {
		container.sort((a, b) => {
			return cmp(b.number, a.number);
		})
	}
	
	targetContainer.empty();
	
	container.forEach((item) => {
		addSort(item, targetContainer);
	});
	return container;
};