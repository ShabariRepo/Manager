// import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// make a component
const Header = (props) => {
    // destructuring as well
    const { textStyle, viewStyle } = styles;

    // the syntax of the style below is called prop for property
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8', //tomato
        justifyContent: 'center', // vertical
        alignItems: 'center', // horizontal
        height: 60,
        paddingTop: 15,
        shadowColor: '#000', // black
         // tells the element the dimensions of the shadow how tall or wide
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.5, // darkness or how heavy
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};

// make the component available to other parts of the app
export { Header };
