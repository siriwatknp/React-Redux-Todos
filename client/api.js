import {v4} from 'node-uuid';

const fakeDatabase = {
  todos: [{
    id: v4(),
    text: 'hey',
    completed: true,
  },{
    id: v4(),
    text: 'ho',
    completed:true,
  },{
    id: v4(),
    text: 'lets go',
    completed: false,
  },{
    id:v4(),
    text: 'Jun',
    completed: false,
  },{
    id:v4(),
    text: 'mine',
    completed: true,
  }]
};

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchTodos = (filter) =>
   delay(1000).then(()=> {
     if(Math.random() > 0.5){
       throw new Error(`Boom!`);
     }

     switch (filter) {
       case 'all':
         return fakeDatabase.todos;
       case 'active':
         return fakeDatabase.todos.filter(t=> !t.completed);
       case 'completed':
         return fakeDatabase.todos.filter(t=> t.completed);
       default:
         throw new Error(`Unknown filter: ${filter}`);
     }
   });
