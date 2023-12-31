export enum Frequency {
    Once = "once",
    Daily = "daily",
    Weekly = "weekly",
    Monthly = "monthly",
}

export class Quest {
    public progress: { [key: string]: number};
    public completed: boolean;
    
    constructor(
        public id: number,
        public title: string,
        public questText: string,
        public requirements: { [key: string]: number },
        public reward: Array<any>,
        public frequency: Frequency = Frequency.Once,
    ) {
        this.progress = {};
        this.completed = false;
        for (let key in requirements) {
            this.progress[key] = 0;  
        }
    }
  
    updateProgress(key: string, value: number ): void {
        this.progress[key] = value;
        this.completeQuest();
    };

    getProgress(): Array<[string, number, number]> {
        const progressArray: Array<[string, number, number]> = [];
        for (let key in this.requirements) {
            const currentProgress: number = this.progress[key];
            const totalRequirement: number = this.requirements[key];
            progressArray.push([key, currentProgress, totalRequirement]);
        }
        return progressArray;
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