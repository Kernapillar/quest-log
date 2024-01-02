import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Quest } from "../models/Quest";

interface QuestLogEntryProps {
    quest: Quest;
}

const QuestLogEntry: React.FC<QuestLogEntryProps> = ({quest}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.questTitle}>{quest.title}</Text>
            <Text style={styles.questDescription}>{quest.questText}</Text>
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        borderWidth: 1, // Add this line
        borderColor: 'black', // Add this line
        borderStyle: 'solid', // Add this line
        alignItems: 'center', // Move this line here
    },
    questTitle: {
        textAlign: 'center',
        height: 80,
        fontSize: 20,
        fontWeight: 'bold',
    },
    questDescription: {
        textAlign: 'center',
        height: 80,
        fontSize: 20,
    },
});

export default QuestLogEntry;