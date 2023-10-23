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