import React from 'react';

import { Text, View, TouchableOpacity } from 'react-native';
import styles from './Card.component.style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Card = (props) => {
  return (
    <View style={styles.container}>
        <View style={styles.detailContainer}>
            <Text style={styles.title}>{props.text} <FontAwesome name='arrow-right' size={16} color="#ccc"/></Text>
        </View>
    </View>
  )
}

export default Card;