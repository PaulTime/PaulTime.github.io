import 'jquery';

export default function add(task, elemDOM, container) {
	elemDOM.prepend(
		`<div class="target__task" data-number=${task.number}><h6>${task.taskName}</h6><p>${task.description}</p><button class="target__task__remove">remove task</button></div>`
		);
	return [task,...container];
};