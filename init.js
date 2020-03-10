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

function getTasks(){
    return tasks
}

function addToTasks(task){
    tasks.push(task)
}