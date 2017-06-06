import 'jquery';
import add from './add';
import sort from './sort';
import remove from './remove';

export default class MakeStore {

	constructor(initState = []) {
		this.state = initState;
		this.number = 0;
	}
	
	addTask(params, elemDOM, container = this.state){
		let task = {
			taskName: params[0],
			description: params[1],
			number: this.number
		};
		this.state = add(task, elemDOM, container);
		this.number++;

		this.showTasks();
	}
	sortTasks(type, targetContainer, container = this.state){
		this.state = sort(type, targetContainer, container);
		console.log('here is store.sort method', type);
		this.showTasks();
	}
	removeTask(elemDOM, number, container = this.state){
		this.state = remove(elemDOM, number, container);
		this.showTasks();
	}
	showTasks(){
		console.log('This is your tasks');
		this.state.forEach((item) => {
			console.log(`[\n  taskName: ${item.taskName} \n  description: ${item.description} \n  number: ${item.number}\n] \n`)
		});
		if (this.state.length == 0) {console.log('[]')};
	}
};
