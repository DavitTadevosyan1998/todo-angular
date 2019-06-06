export class Todo {
    constructor(public text: string,
        public id: number,
        public completed: boolean = false,
        public editing: boolean = false,
        public hover: boolean = false,
        public filter:string = 'all') { }
}