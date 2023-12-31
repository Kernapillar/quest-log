export class Quest {
    constructor(
      public id: string,
      public objective: string,
      public questText: string,
      public reward: string,
      // Add other properties as needed
    ) {}
  
    complete() {
      // Add code to complete the quest
    }
  }