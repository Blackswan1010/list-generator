const Component = require('../lib/component.js');

class TaskList extends Component{
    constructor(){
        super();
    };

    render = () => {
        return `<ul class="tasks">${this.children}</ul>`;
    }
}

module.exports = TaskList;