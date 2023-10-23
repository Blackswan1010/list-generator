class Component {
    constructor(children){
        
        if(children){
            this.children = children;
        } else {
            this.children = [];
        }
    }

    render = () =>{
        throw new Error(`Child class must implement render() method.`);
    }

    renderInnerHTML = () =>{
        for(let i=0; i < this.children.length; i++){
            if(typeof this.children[i] !== 'string'){
                this.children[i].render();
            } 
        }
    }
}

class Header extends Component{
    constructor(title, date){
        this.title = title;
        this.date = date;
    }
    
    render = () =>{
        return `<header class="header"><h1>${this.title}</h1><p>${this.date}</p></header>`;
    }  
}

class TaskListItem extends Component{
    constructor(priority){
        super(children)

        this.priority = priority;
    }

    render = () => {
        if(this.priority){
            return `<li class="tasks-item tasks-item-priority">${this.children}</li>`;
        } else {
            return `<li class="tasks-item">${this.children}</li>`;
        } 
    }  
}

class TaskList extends Component{
    constructor(){
        super(children)
    }

    render = () => {
        return `<ul class="tasks">${this.children}</ul>`;
    }
}



export {Component, Header, TaskListItem, TaskList};
