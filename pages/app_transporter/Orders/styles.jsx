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
        paddingTop: 35,
        paddingBottom: 0,
        justifyContent: 'top'
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
        marginBottom: 10,
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
        paddingTop: 25
    },
    searchContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    input: {
        width: '83.5%'
    },
    cardsContainer: {
        display: 'flex',
        marginBottom: 50,
        marginTop: 15,
    },
    textFinal: {
        fontFamily: 'poppins_medium',
        color: '#989898',
        textAlign: 'center',
        fontSize: 12,
        marginTop: 10
    },

    menu: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 0,
        width: '100%',
        height: 60,
        paddingHorizontal: 40,

        shadowColor: "#000",
        elevation: 50
    },

    // renderização de cards
    item: {
        marginBottom: 15,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#ECECEC',
        borderRadius: 8,
        padding: 13,
        flexBasis: 1,
        alignItems: 'center',
        gap: 10
    },

    containerRowCard: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },

    smallGray: {
        color: '#6F6F6F',
        fontFamily: 'poppins_regular',
        fontSize: 9,
        marginBottom: -2
    },
    smallGray2: {
        color: '#6F6F6F',
        fontFamily: 'poppins_regular',
        fontSize: 9,
        marginBottom: -2,
    },
    clientName: {
        fontFamily: 'poppins_regular',
        color: '#000',
        fontSize: 15,
        marginTop: 0
    },
    orderPrice: {
        fontFamily: 'poppins_medium',
        fontSize: 13,
        color: '#000'
    },
    right: {
        alignItems: 'flex-end'
    },

    status: {
        fontSize: 13,
        fontFamily: 'poppins_medium'
    },
    status1: {
        color: '#E77E1E',
    },
    status2: {
        color: '#01A83A',
    },

    buttonStatus: {
        borderRadius: 7,
        paddingHorizontal: 25,
        paddingVertical: 7,
    },
    btnStatus1: {
        backgroundColor: '#E77E1E'
    },
    btnStatus2: {
        backgroundColor: '#01A83A'
    },
    buttonText: {
        color: '#fff',
        fontFamily: 'poppins_semibold',
        fontSize: 11,
        marginTop: 1
    },

    // estilizações do modal de menu lateral
    centeredView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        marginTop: 0
    },
    modalView: {
        margin: 0,
        backgroundColor: '#FFF',
        borderRadius: 24,
        borderBottomLeftRadius: 0,
        borderTopLeftRadius: 0,
        width: '65%',
        height: '100%',
        paddingLeft: 22,
        paddingVertical: 60,

        display: 'flex',
        flexDirection: 'column',
        gap: 25,
        boxShadow: '20ox 4px 8px 50px rgba(0, 0, 0, 0.2)'
    },
    btnCloseModal: {
        position: 'absolute',
        bottom: '94%',
        left: '55%'
    },
    modalProfile: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 9
    },
    modalTexts: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
    },
    textNormal: {
        fontFamily: 'poppins_regular',
        fontSize: 14
    },
    textLogout: {
        fontFamily: 'poppins_semibold',
        fontSize: 14
    },
    appInfo: {
        marginTop: '140%'
    },
    appInfoText: {
        fontSize: 14,
        fontFamily: 'poppins_medium',
        color: 'rgba(0, 0, 0, 0.35)'
    },
    modalUserName: {
        fontSize: 16,
        fontFamily: 'poppins_medium'
    },
    modalUserEmail: {
        fontSize: 11,
        fontFamily: 'poppins_regular'
    },

    // estilos do modal de confirmação
    modalConfirmView: {
        margin: 0,
        backgroundColor: '#FFF',
        borderRadius: 30,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        width: '100%',
        paddingVertical: 50,
        paddingHorizontal: 30,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 50,
    },
    confirmModalText: {
        fontFamily: 'poppins_medium',
        fontSize: 13,
        color: '#000',
        textAlign: 'center',
        marginBottom: 10,
    },
    confirmModalButtons: {
        width: '100%',
        flexDirection: 'column',
        gap: 5
    },
    confirmModalButton: {
        backgroundColor: '#008764',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 40,
    },
    cancelModalButton: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 40,
    },
    confirmButtonText: {
        color: '#FFF',
        fontSize: 13,
        fontFamily: 'poppins_medium',
    },
    cancelButtonText: {
        color: '#008764',
        fontSize: 13,
        fontFamily: 'poppins_medium',
    },
    succesModalText: {
        fontFamily: 'poppins_medium',
        fontSize: 13,
        color: '#000',
        textAlign: 'center',
        marginTop: 10,
    },
});

export default styles;