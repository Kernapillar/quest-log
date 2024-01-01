import React from 'react';
import { render } from '@testing-library/react-native';
import QuestLogComponent from '../components/questlogcomponent';
import { seedQuests } from '../utils/seed';

describe('QuestLogComponent', () => {
  it('renders correctly', () => {
    const questLog = seedQuests
    // Add some quests to your quest log here

    const { getByText } = render(<QuestLogComponent questLog={questLog} />);

    // Replace 'Quest 1' with the title of one of your quests
    expect(getByText('Get Jamming')).toBeTruthy();
  });
});