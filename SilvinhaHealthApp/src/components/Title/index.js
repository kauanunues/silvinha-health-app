import { View, Text } from "react-native";

import {styles } from './style'

export default function Title() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Silvinha Health App!</Text>
        </View>
    );
}