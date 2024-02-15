import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    containerChild: {
        flex: 1,
        backgroundColor: '#FFF',
        padding: 30,
        justifyContent: 'top'
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: 0
    },
    textHeader: {
        color: '#000',
        fontSize: 12,
        fontFamily: 'poppins_medium'
    },
    textTitle: {
        color: '#000',
        fontSize: 16,
        fontFamily: 'poppins_medium',
        marginTop: 30,
        marginBottom: 10
    },
    textSmall: {
        color: '#000',
        fontSize: 10,
        fontFamily: 'poppins_regular',
    },
    
    checkBoxContainer: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        width: '100%',
        marginTop: 10,
        marginBottom: 20
    },
    checkBoxText: {
        color: '#000',
        fontSize: 10,
        fontFamily: 'poppins_regular',
        fontWeight: 500
    },

    inputContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    inputBigger:{
        width: '72%'
    },
    inputSmaller: {
        width: '25%'
    }
});

export default styles;