// HomePage.tsx
import React from 'react';
import { View } from 'react-native';
import  QuestLogComponent  from '../components/QuestLogIndex';
import { seedQuests } from '../utils/Seed';

const HomePage = () => {
  return (
    <View>
      <QuestLogComponent questLog={seedQuests} />
    </View>
  );
};

export default HomePage;