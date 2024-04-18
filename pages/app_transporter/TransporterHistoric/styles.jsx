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

    // stts

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

    textDate: {
        fontFamily: 'poppins_regular',
        color: '#6F6F6F',
        fontSize: 10
    },
    textPadrao: {
        fontFamily: 'poppins_medium',
        color: '#000',
        fontSize: 13,
    },
    textItemPedido: {
        fontFamily: 'poppins_regular',
        color: '#3D3D3D',
        fontSize: 13,
        paddingLeft: 7,
        lineHeight: 22,
        marginTop: 8
    },
    containerRowPedido: {
        display: 'flex',
        flexDirection: 'row',
        gap: 7,
        alignItems: 'center',
        marginTop: 3
    },
    textValor: {
        fontFamily: 'poppins_regular',
        fontSize: 10,
        color: '#686868',
        marginRight: 10
    },
    valor: {
        fontFamily: 'poppins_medium',
        fontSize: 14,
        color: '#000',
        marginRight: 10
    }
});

export default styles;