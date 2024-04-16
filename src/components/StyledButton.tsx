import React from 'react';
import { ButtonProps, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { accentColor } from '../constants/Colors';

interface StyledButtonProps extends ButtonProps {
    title: string;
    onPress: () => void;
}

export function PrimaryButton({ title, onPress }: StyledButtonProps) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: accentColor,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    text: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
