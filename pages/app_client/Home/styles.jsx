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
    
    textHeader: {
        color: '#000',
        fontSize: 12,
        fontFamily: 'poppins_medium'
    },
    
    iconContainer: {
        width: 36,
        height: 36,
        borderWidth: 1,
        borderColor: '#6D6D6D',
        borderRadius: 6,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default styles;