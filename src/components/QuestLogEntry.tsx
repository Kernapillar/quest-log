import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Quest } from "../models/Quest";
import Icon from 'react-native-vector-icons/FontAwesome';

interface QuestLogEntryProps {
    quest: Quest;
}

const QuestLogEntry: React.FC<QuestLogEntryProps> = ({quest}) => {

    const requirementsArr: Array<[string, number, number]> = quest.getProgress();

    return (
        <View style={styles.container}>
            <Text style={styles.questTitle}>{quest.title}</Text>
            {requirementsArr.map((requirement, index) => {
                if (requirement[1] === requirement[2]) {
                    return (
                        <>
                            <Text style={styles.questRequirements} key={index}> {requirement[0]} {requirement[1].toString()}/{requirement[2].toString()}
                                <Icon name="check" size={20} color="green" />
                            </Text>            
                        </>
                    )
                } else if (requirement[2] === 1) {
                    return (
                        <>
                            <Text style={styles.questRequirements} key={index}> {requirement[0]} {"   "}
                                <Icon name="square-o" size={20} color="black" />
                            </Text>            
                        </>
                    )
                } else {
                    return (
                        <>
                            <Text style={styles.questRequirements} key={index}> {requirement[0]} {requirement[1].toString()}/{requirement[2].toString()}</Text>
                            
                        </>
                    )
                }
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