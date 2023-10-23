const Component = require('../lib/component.js');

class TaskList extends Component{
    constructor(listItems){
        super();

        this.listItems = listItems;
    };

    render = () => {
        return `<ul class="tasks">${this.listItems}</ul>`;
    }
}

module.exports = TaskList;