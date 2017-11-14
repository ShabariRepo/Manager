import React from 'react';
import { View } from 'react-native';


// if passed in an array then the styles passed in as prop to the right
// will override any current (left)
// so in this case by default we want to have flex direction of row
// but for the shift scroller we want column so... override
const CardSection = (props) => {
    return (
        <View style={[styles.containerStyle, props.styles]}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
};

export { CardSection };
