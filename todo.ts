import {todointerface} from './interfacess';

class todo implements todointerface
{

    constructor (){}

    tasks: Array<string>=[];
    

    addTask(task:string):number
  {
   this.tasks.push(task);
    console.log("----   New Task Added     -----  ");
    console.log("Task " +task+ "inserted in list");

    return this.tasks.length;
  }

   listAllItems():void
{
    console.log("START: ALL items in Array:");
    this.tasks.forEach(function(task){
        console.log(task);
    })
    console.log("END: ALL items in Array:");
}

deleTask(task:string):number
{
    let index:number = this.tasks.indexOf(task);
    if(index > -1)
    {
        this.tasks.splice(index,1);
        console.log("---- Task removed  ------");
        console.log("Task " +task+ "removed from list");
    }
    return this.tasks.length
}

}

let mytodo = new todo();
mytodo.addTask("eat");
mytodo.addTask("sleep");

mytodo.listAllItems();

mytodo.deleTask("eat");