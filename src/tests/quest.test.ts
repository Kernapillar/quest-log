
import { Quest, Frequency } from '../models/quest';

describe('Quest', () => {
  let quest: Quest;

  beforeEach(() => {
    quest = new Quest(
      1,
      'Test Quest',
      'This is a test quest',
      { 'requirement1': true, 'requirement2': 2 },
      ['reward1', 'reward2'],
      true,
      Frequency.Daily
    );
  });

  test('constructor', () => {
    expect(quest.id).toBe(1);
    expect(quest.title).toBe('Test Quest');
    expect(quest.questText).toBe('This is a test quest');
    expect(quest.requirements).toEqual({ 'requirement1': true, 'requirement2': 2 });
    expect(quest.reward).toEqual(['reward1', 'reward2']);
    expect(quest.repeatable).toBe(true);
    expect(quest.frequency).toBe(Frequency.Daily);
    expect(quest.progress).toEqual({ 'requirement1': false, 'requirement2': 0 });
    expect(quest.completed).toBe(false);
  });

  test('updateProgress', () => {
    quest.updateProgress('requirement1', true);
    quest.updateProgress('requirement2', 2);
    expect(quest.progress['requirement1']).toBe(true);
    expect(quest.progress['requirement2']).toBe(2);
  });

  test('completeQuest', () => {
    quest.updateProgress('requirement1', true);
    quest.updateProgress('requirement2', 2);
    expect(quest.completeQuest()).toBe(true);
    expect(quest.completed).toBe(true);
  });
  
  test('completeQuest', () => {
    quest.updateProgress('requirement1', true);
    quest.updateProgress('requirement2', 1);
    expect(quest.completeQuest()).toBe(false);
    expect(quest.completed).toBe(false);
  })
});