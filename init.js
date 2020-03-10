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

export function getTasks(){
    return tasks
}
    
export function addToTasks(task){
    tasks.push(task)
}
