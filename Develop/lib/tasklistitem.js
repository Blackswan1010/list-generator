const Component = require('../lib/component.js');

class TaskListItem extends Component{
    constructor(priority, child){
        super();

        this.child = child;
        this.priority = priority;
    }

    render = () => {
        if(this.priority){
            return `<li class="tasks-item tasks-item-priority">${this.child}</li>`;
        } else {
            return `<li class="tasks-item">${this.child}</li>`;
        } 
    }  
}

module.exports = TaskListItem;