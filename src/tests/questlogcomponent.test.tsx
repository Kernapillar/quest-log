import React from 'react';
import { render } from '@testing-library/react-native';
import QuestLogComponent from '../components/QuestLogIndex';
import { seedQuests } from '../utils/Seed';

describe('QuestLogComponent', () => {
  it('renders correctly', () => {
    const questLog = seedQuests
    // Add some quests to your quest log here

    const { getByText } = render(<QuestLogComponent questLog={questLog} />);

    // Replace 'Quest 1' with the title of one of your quests
    expect(getByText('Get Jamming')).toBeTruthy();
    expect(getByText('Shopping list')).toBeTruthy();
    expect(getByText('Cookie Monster')).toBeTruthy();
    expect(getByText('Talk Like a Pirate')).toBeTruthy();
    expect(getByText('The Floor is Lava')).toBeTruthy();
  });
    
});