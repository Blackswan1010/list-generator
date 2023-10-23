const Component = require('../lib/component.js');

class Header extends Component{
    constructor(title, date){
        this.title = title;
        this.date = date;
    }
    
    render = () =>{
        return `<header class="header"><h1>${this.title}</h1><p>${this.date}</p></header>`;
    }  
};

module.exports = Header;