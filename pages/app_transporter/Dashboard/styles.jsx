import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FEFEFE',
    },
    
    containerChild: {
        flex: 1,
        backgroundColor: '#FEFEFE',
        padding: 30,
        paddingTop: 20,
        paddingBottom: 0,
        justifyContent: 'top'
    },
    
    mainContainer: {
        paddingTop: 25
    },
    
    title: {
        color: '#000',
        fontSize: 16,
        fontFamily: 'poppins_medium',
        marginTop: 21,
    },

    titleMedium: {
        color: '#000',
        fontSize: 14,
        fontFamily: 'poppins_medium',
        marginTop: 15,
    },

    subtitle: {
        color: '#6F6F6F',
        fontSize: 10,
        fontFamily: 'poppins_regular',
        marginBottom: 30
    },

    imageGrafic: {
        width: '100%',
        height: 191,
        borderRadius: 7
    },

    containerLastMonths: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingVertical: 12,
        borderRadius: 8,
        gap: 20,
        borderWidth: 1,
        borderColor: '#ECECEC',
    },

    containerLastMonthsValue: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingVertical: 12,
        borderRadius: 8,
        backgroundColor: '#E5F2EF',
        gap: 15
    },

    containerTotalOrders: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingVertical: 12,
        borderRadius: 8,
        backgroundColor: '#FEEFE1',
        gap: 15
    },

    containerValues:{
        gap: 15
    },

    smallText1: {
        fontSize: 9,
        color: '#000',
        fontFamily: 'poppins_medium',
        textAlign: 'center',
        width: 94
    },
    
    smallText2: {
        fontSize: 9,
        color: '#000',
        fontFamily: 'poppins_medium',
        textAlign: 'center'
    },
    
    smallText3: {
        fontSize: 9,
        color: '#E77E1E',
        fontFamily: 'poppins_medium',
        textAlign: 'center',
        width: 103
    },
    
    bigText1: {
        fontSize: 30,
        color: '#000',
        fontFamily: 'poppins_medium',
        textAlign: 'center',
        margin: 0,
        marginBottom: -5
    },
    
    bigText2: {
        fontSize: 30,
        color: '#008764',
        fontFamily: 'poppins_medium',
        textAlign: 'center',
        margin: 0,
        marginBottom: -5,
        marginTop: -15
    },

    bigText3: {
        fontSize: 35,
        color: '#E77E1E',
        fontFamily: 'poppins_semibold',
        textAlign: 'center',
        margin: 0,
        marginBottom: -5
    },
});

export default styles;