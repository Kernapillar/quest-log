// HomePage.tsx
import React from 'react';
import { View } from 'react-native';
import  QuestLogComponent  from '../components/questlog';
import { seedQuests } from '../utils/seed';

const HomePage = () => {
  return (
    <View>
      <QuestLogComponent questLog={seedQuests} />
    </View>
  );
};

export default HomePage;