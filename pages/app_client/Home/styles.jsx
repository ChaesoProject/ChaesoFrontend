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
    headerTextContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    textHeaderName: {
        color: '#000',
        fontSize: 14,
        fontFamily: 'poppins_medium'
    },
    textHeaderAdress: {
        color: '#6F6F6F',
        fontSize: 10,
        fontFamily: 'poppins_regular'
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
    },
    iconContainerGreen: {
        width: 40,
        height: 40,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00916C'
    },
    mainContainer: {
        marginTop: 30
    },
    searchContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    input: {
        width: '83.5%'
    }
});

export default styles;