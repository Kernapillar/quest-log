import { Quest } from './quest';


export class QuestLog {
  constructor(
    public quests: Array<Quest>, 
    public completedQuests: Array<Quest>,
  ) {
    this.quests = [];
    this.completedQuests = [];
  }

  addQuest(quest: Quest): void {
    this.quests.push(quest);
  }

  removeQuest(quest: Quest): void {
    this.quests.splice(this.quests.indexOf(quest), 1);
  }
  
  completeQuest(quest: Quest): void {
    const index = this.quests.indexOf(quest);
    if (index > -1) {
      this.quests.splice(index, 1);
      this.completedQuests.push(quest);
    }
  }

  getQuests(): Array<Quest>  {
    return this.quests;
  }

  getCompletedQuests(): Array<Quest> {
    return this.completedQuests;
  }


}