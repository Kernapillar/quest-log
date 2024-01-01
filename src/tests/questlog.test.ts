import { Quest, Frequency } from '../models/quest'; // adjust the import path as needed
import { QuestLog } from '../models/questlog'; // adjust the import path as needed

describe('QuestLog', () => {
  let questLog: QuestLog;
  let quest: Quest;
  let quest2: Quest;

  beforeEach(() => {
    questLog = new QuestLog();
    quest = new Quest(
        1, 
        'Test Quest', 
        'This is a test quest', 
        { 'task1': false, 'task2': 0 }, 
        ['reward1', 'reward2'], true, 
        Frequency.Daily);

    quest2 = new Quest(
        2, 
        'Test Quest 2', 
        'This is a test quest 2', 
        { 'task1': false, 'task2': 0 }, 
        ['reward1', 'reward2'], true, 
        Frequency.Daily
    );
  });

  test('addQuest', () => {
    questLog.addQuest(quest);
    expect(questLog.getQuests()).toContain(quest);
  });

  test('removeQuest', () => {
    questLog.addQuest(quest);
    questLog.removeQuest(quest);
    expect(questLog.getQuests()).not.toContain(quest);
  });

  test('completeQuest', () => {
    questLog.addQuest(quest);
    questLog.completeQuest(quest);
    expect(questLog.getQuests()).not.toContain(quest);
    expect(questLog.getCompletedQuests()).toContain(quest);
  });

  test('moveUp', () => {
    questLog.addQuest(quest);
    questLog.addQuest(quest2);
    questLog.moveUp(quest2);
    expect(questLog.getQuests()[0]).toBe(quest2);
    expect(questLog.getQuests()[1]).toBe(quest);
  });

  test('moveDown', () => {
    questLog.addQuest(quest);
    questLog.addQuest(quest2);
    questLog.moveDown(quest);
    expect(questLog.getQuests()[0]).toBe(quest2);
    expect(questLog.getQuests()[1]).toBe(quest);
  }); 
  
  test('getQuests', () => {
    questLog.addQuest(quest);
    questLog.addQuest(quest2);
    expect(questLog.getQuests()).toEqual([quest, quest2]);
  });

  test('capacity', () => {  
    questLog = new QuestLog(1);
    questLog.addQuest(quest);
    expect(questLog.addQuest(quest2)).toBe(false);
  });

  test('atCapacity', () => {    
    questLog = new QuestLog(1);
    questLog.addQuest(quest);
    expect(questLog.atCapacity()).toBe(true);
  });

});