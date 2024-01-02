import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import { QuestLog } from '../models/QuestLog';
import QuestLogEntry from './QuestLogEntry';

interface QuestLogProps {
  questLog: QuestLog;
}

const QuestLogComponent: React.FC<QuestLogProps> = ({ questLog }) => {
  return (
    <FlatList
        data={questLog.getQuests()}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item: quest }) => <QuestLogEntry quest={quest}/>}
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