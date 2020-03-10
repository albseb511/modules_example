(function initWrapper(){
var tasks = [
    {
        title: 'Buy Milk',
        status: false
    },
    {
        title: 'Buy Batteries',
        status: false
    },
    {
        title: 'Buy Bread',
        status: true
    },
]

    MAIN.getTasks = function getTasks(){
        return tasks
    }
    
    MAIN.addToTasks = function addToTasks(task){
        tasks.push(task)
    }
})()