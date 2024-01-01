import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import { QuestLog } from '../models/questlog';

interface QuestLogProps {
  questLog: QuestLog;
}

const QuestLogComponent: React.FC<QuestLogProps> = ({ questLog }) => {
  return (
    <FlatList
        data={questLog.getQuests()}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item: quest }) => <Text style={styles.questTitle}>{quest.title}</Text>}
    />
  );
};

const styles = StyleSheet.create({  
    questTitle: {
        textAlign: 'center',
        height: 80,
    },
});

export default QuestLogComponent;