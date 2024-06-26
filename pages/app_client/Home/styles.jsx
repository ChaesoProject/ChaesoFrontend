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
    rowCategories: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 30
    },
    category: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#F2F2F2',
        borderRadius: 8,
        width: '32%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 11
    },
    categoryName: {
        fontFamily: 'poppins_medium',
        fontSize: 10,
        color: '#000',
        marginTop: 5
    },
    categoryTitle: {
        color: '#000',
        fontSize: 16,
        fontFamily: 'poppins_medium',
        marginTop: 21,
        marginBottom: 14
    },
    imageBanner: {
        width: '100%',
        height: 140,
        marginBottom: 30
    },
    cardsContainer: {
        display: 'flex',
        marginBottom: 50
    },

    bannerContainer: {
        width: '100%',
        height: 130,
        borderRadius: 10,
        backgroundColor: '#F5F5F5',
        marginBottom: 30,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 23
    },
    imageB: {
        width: 130,
        height: 115
    },
    bannerTextsContainer: {
        width: '50%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
    },
    textBanner1: {
        fontSize: 14,
        fontFamily: 'poppins_semibold'
    },
    textBanner2: {
        fontSize: 10,
        marginBottom: 5,
        fontFamily: 'poppins_semibold',
    },
    textBanner3: {
        fontSize: 13,
        fontFamily: 'poppins_semibold'
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
        marginRight: 10,
        marginBottom: 15,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#ECECEC',
        borderRadius: 8,
        padding: 9,
        flexBasis: `${(100 / 2) - 2}%`,
        alignItems: 'center'
    },
    imageCard: {
        width: '100%',
        height: 110,
        marginBottom: 7,
        borderRadius: 4
    },
    rowProduct: {
        display: 'flex',
        flexDirection: 'row',
        gap: 7,
        marginBottom: 2
    },
    productPrice: {
        color: '#008764',
        fontFamily: 'poppins_semibold',
        fontSize: 18,
        marginBottom: 7
    },
    productName: {
        fontFamily: 'poppins_semibold',
        color: '#000',
        fontSize: 12
    },
    unit: {
        color: '#7A7A7A',
        fontFamily: 'poppins_regular',
        fontSize: 12
    },
    buttonAdd: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        backgroundColor: '#E6F5F1',
        width: '100%',
        borderRadius: 4
    },
    textAdd: {
        color: '#008764',
        fontFamily: 'poppins_medium',
        marginLeft: 5,
        fontSize: 14
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
});

export default styles;