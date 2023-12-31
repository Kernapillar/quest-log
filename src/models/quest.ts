export enum Frequency {
    Once = "once",
    Daily = "daily",
    Weekly = "weekly",
    Monthly = "monthly",
}


export class Quest {
    public progress: { [key: string]: number | boolean};
    public completed: boolean;
    
    constructor(
        public id: number,
        public title: string,
        public questText: string,
        public requirements: { [key: string]: number | boolean },
        public reward: Array<any>,
        public repeatable: boolean = false,
        public frequency: Frequency = Frequency.Once,
    ) {
        this.progress = {};
        this.completed = false;
        for (let key in requirements) {
            typeof(this.requirements[key]) === 'number' ? this.progress[key] = 0 : this.progress[key] = false;  
        }
    }
  
    

    completeQuest(): boolean {
        for (let key in this.progress) {
            if (this.progress[key] !== this.requirements[key]) {
                    return false;
            }
        }
        this.completed = true;
        return true;
    }
  }