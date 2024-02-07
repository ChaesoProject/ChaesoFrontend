import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "left",
        padding: 30,
        backgroundColor: "#FFFFFF",
        height: 496,
        width: "100%",

        shadowColor: "#000",
        shadowOffset: {
            width: 7,
            height: 0,
        },
        shadowOpacity: 0.22,
        shadowRadius: 21.9,
        borderTopRightRadius: 200,
    },
    title: {
        fontSize: 15,
        fontFamily: "poppins_regular",
        marginBottom: 9,
        color: "#000",
    },
    imageLogo: {
        width: 133,
        height: 69,
        marginBottom: 35,
    },
    backgroundImage: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: 'flex-end'
    },
    label: {
        fontFamily: "poppins_medium",
        marginBottom: 20,
        color: "#989898",
        fontSize: 12,
        alignSelf: 'center'
    },
    button: {
        width: "100%",
        backgroundColor: "#000",
        borderRadius: 10,
        paddingVertical: 11,
        alignItems: "center",
        marginTop: 20,
    },
    buttonText: {
        color: "white",
        fontSize: 14,
        fontFamily: "poppins_regular",
    },
    link: {
        color: "#989898",
        fontFamily: "poppins_medium",
        fontSize: 12,
    },
    linkBold: {
        color: "#000",
        fontFamily: "poppins_semibold",
    },
    row: {
        marginTop: 15,
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
    },
});

export default styles;
