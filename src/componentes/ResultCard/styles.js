import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";
  

export const styles =StyleSheet.create({
    container: {
        backgroundColor: colors.cardBackground,
        borderRadius: 16,
        padding: 23
    },
    label: {
        color: colors.textSecondary,
        marginBottom: 8,
        fontSize: 18
    },
    amount: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.text,
        marginBottom: 14
    },
    rate: {
        color: colors.secondary,
        fontSize: 14
    }
})