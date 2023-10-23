const Component = require('../lib/component.js');
const Header = require('../lib/header.js');
const TaskListItem = require('../lib/tasklistitem.js');
const TaskList = require('../lib/tasklist.js');

describe ('Component', () =>{
    describe('render', () => {
        it('should throw error when render function is called at Component class', () => {
            
            function cb() {
                const newComponent = new Component;
                newComponent.render();
            }
            const err = `Child class must implement render() method.`;
            expect(cb).toThrow();
        });
   
    });
});

describe ('Header', () => {
    describe('render', () => {
        it('should render the html element', () => {
            const header = new Header('Object Oriented Programming','10/23/2023');

            expect(header.render()).toEqual(`<header class="header"><h1>Object Oriented Programming</h1><p>10/23/2023</p></header>`);
        })
    })
})

describe ('TaskListItem', () => {
    describe('render', () => {
        it('should render the list tag element', () => {
            const arr = ['Dishes'];
            const listitem = new TaskListItem('', arr[0]);

            expect(listitem.render()).toEqual(`<li class="tasks-item">Dishes</li>`);
        })
    })
})


describe ('TaskList', () => {
    describe('render', () => {
        it('should render the list tag element', () => {
            const arr = ['Dishes'];
            const list = new TaskList(arr[0]);

            expect(list.render()).toEqual(`<ul class="tasks">Dishes</ul>`);
        })
    })
})