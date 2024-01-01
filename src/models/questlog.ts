import { Quest } from './quest';


export class QuestLog {
  constructor(
    public capacity: number = 10,
    public quests: Array<Quest> = [], 
    public completedQuests: Array<Quest> = [],
  ) {}

  addQuest(quest: Quest): boolean {
    if (this.quests.length >= this.capacity) {
      return false
    }
    this.quests.push(quest);
    return true;
  }

  removeQuest(quest: Quest): void {
    this.quests.splice(this.quests.indexOf(quest), 1);
  }

  atCapacity(): boolean {
    return this.quests.length >= this.capacity;
  }
  
  completeQuest(quest: Quest): void {
    const index = this.quests.indexOf(quest);
    if (index > -1) {
      this.quests.splice(index, 1);
      this.completedQuests.push(quest);
    }
  }

  moveUp(quest: Quest): void {  
    const index = this.quests.indexOf(quest);
    if (index > 0) {
      this.quests.splice(index - 1, 0, this.quests.splice(index, 1)[0]);
    }
  }

  moveDown(quest: Quest): void {
    const index = this.quests.indexOf(quest);
    if (index < this.quests.length - 1) {
      this.quests.splice(index + 1, 0, this.quests.splice(index, 1)[0]);
    }
  }

  getQuests(): Array<Quest>  {
    return this.quests;
  }

  getCompletedQuests(): Array<Quest> {
    return this.completedQuests;
  }


}