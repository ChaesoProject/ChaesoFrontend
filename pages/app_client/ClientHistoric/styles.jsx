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
    headerTextContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    textHeaderAdress: {
        color: '#6F6F6F',
        fontSize: 10,
        fontFamily: 'poppins_regular',
        marginBottom: 30
    },
    mainContainer: {
        paddingTop: 25
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
    },
    cardsContainer: {
        display: 'flex',
        marginBottom: 50
    },
    textPriceFinal: {
        fontSize: 20,
        fontFamily: 'poppins_semibold',
        color: '#008764'
    },
    textFinal: {
        fontFamily: 'poppins_medium',
        color: '#000',
        fontSize: 12,
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
        display: 'flex',
        flexDirection: 'row',
        flexBasis: '100%',
        alignItems: 'center',
        marginBottom: 10,
        justifyContent: 'space-between'
    },
    imageMap: {
        width: '100%',
        height: 270,
        borderRadius: 7
    },
    columnProduct: {
        display: 'flex',
        flexDirection: 'column',
        gap: -1,
        marginBottom: 0,
        marginLeft: -40
    },
    productPrice: {
        color: '#000',
        fontFamily: 'poppins_semibold',
        fontSize: 16,
        marginBottom: 0,
        marginTop: 0
    },
    productName: {
        fontFamily: 'poppins_regular',
        color: '#505050',
        fontSize: 12,
        marginBottom: 0
    },
    productUnit: {
        color: '#6F6F6F',
        fontSize: 10,
        fontFamily: 'poppins_regular',
        marginBottom: 1
    },
    unit: {
        color: '#7A7A7A',
        fontFamily: 'poppins_regular',
        fontSize: 12
    },
    textAdd: {
        color: '#008764',
        fontFamily: 'poppins_medium',
        marginLeft: 5,
        fontSize: 14
    },
    containerQuant: {
        display: 'flex',
        flexDirection: 'column',
        width: 80,
        alignItems: 'center',
        marginRight: -40
    },
    resume: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    buttonContainer: {
        backgroundColor: '#008764',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 42,
        marginTop: 15
    },
    buttonText: {
        color: 'white',
        fontSize: 14,
        fontFamily: 'poppins_medium'
    },

    // teste de modal ---------------

    // configurações do modal
    centeredView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        marginTop: 0
    },
    modalView: {
        margin: 0,
        backgroundColor: '#FFF',
        borderRadius: 30,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        width: '100%',
        height: 'auto',
        paddingTop: 50,
        paddingBottom: 55,
        paddingLeft: 30,
        paddingRight: 30,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 25,
        boxShadow: '20ox 4px 8px 50px rgba(0, 0, 0, 0.2)'
    },
    btnContainer: {
        width: '83%'
    },
    buttonContainerModal: {
        backgroundColor: '#008764',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 42,
        marginBottom: -15
    },
    buttonContainerModalEdit: {
        backgroundColor: '#fff',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 42
    },
    buttonText2: {
        color: '#008764',
        fontSize: 14,
        fontFamily: 'poppins_medium'
    },
    textModal: {
        fontFamily: 'poppins_regular',
        fontSize: 14,
        color: '#000',
        textAlign: 'center'
    },
    bold: {
        fontFamily: 'poppins_semibold',
    },
    btnClose: {
        position: 'absolute',
        bottom: 430,
        right: 20
    },
    btnClose1: {
        position: 'absolute',
        bottom: 230,
        right: 20
    },

    textTitleModal: {
        fontFamily: 'poppins_medium',
        fontSize: 16,
        textAlign: 'left'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: 0
    },
    inputContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    inputBigger: {
        width: '72%'
    },
    inputSmaller: {
        width: '25%'
    },

    textStts: {
        fontFamily: 'poppins_medium',
        fontSize: 12,
        color: '#000',
        marginBottom: 13
    },
    cardStatus: {
        padding: 20,
        borderWidth: 1,
        borderColor: '#F0F0F0',
        borderRadius: 10,
        marginTop: 10
    },
    sectionTtile: {
        fontFamily: 'poppins_semibold',
        fontSize: 12,
        color: '#000'
    },
    sectionTtile2: {
        fontFamily: 'poppins_semibold',
        fontSize: 12,
        color: '#000',
        marginTop: 30
    },

    cardPedido: {
        padding: 12,
        borderWidth: 1,
        borderColor: '#F0F0F0',
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 5
    },

    line: {
        borderBottomWidth: 1,
        borderBottomColor: '#E4E4E4',
        marginVertical: 10,
    },
});

export default styles;