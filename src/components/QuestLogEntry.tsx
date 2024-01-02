import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Quest } from "../models/Quest";

interface QuestLogEntryProps {
    quest: Quest;
}

const QuestLogEntry: React.FC<QuestLogEntryProps> = ({quest}) => {

    const requirementsArr: Array<[string, number, number]> = quest.getProgress();

    return (
        <View style={styles.container}>
            <Text style={styles.questTitle}>{quest.title}</Text>
            {requirementsArr.map((requirement, index) => {
                return (
                    
                    <Text style={styles.questRequirements} key={index}> {requirement[0]} {requirement[1].toString()}/{requirement[2].toString()}</Text>
                )
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        borderWidth: 1, 
        borderColor: 'grey', 
        borderStyle: 'solid', 
        
    },
    questTitle: {
        textAlign: 'center',
        height: 40,
        fontSize: 20,
        fontWeight: 'bold',
    },
    questRequirements: {
        textAlign: 'right',
        marginRight: 20,
        fontSize: 20,
    },
});

export default QuestLogEntry;