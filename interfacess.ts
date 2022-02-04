export interface todointerface
{
    tasks: Array<string>;
    addTask(task:string):number;
    listAllItems():void;
    deleTask(task: string):number;
}