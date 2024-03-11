import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        width:'100%',
        height: '100%',
        bottom:0,
        backgroundColor: "#fff",
        alignItems:'center',
        marginTop:30,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
    },
    formGroup: {
        width : '100%',
        height : 'auto',
        marginTop : 30,
        padding: 10,
    },
    formLabel: {
        color: "#000000",
        fontSize: 18,
        paddingLeft: 20,
    },
    input: {
        width: '90%',
        fontSize: 18,
        borderRadius: 20,
        backgroundColor: '#f6f6f6',
        height: 40,
        margin: 12,
        paddingHorizontal: 15,
    },
    button: {
        backgroundColor: "#FF0043",
        borderRadius : 50,
        alignItems : 'center',
        justifyContent: 'center',
        width: '90%',
        paddingVertical: 14,
        marginLeft: 12,
        margin: 30
    },
    textButton: {
        fontSize: 22,
        color: "#FFFFFF",
        fontWeight: 'bold'
    },
});

export default styles;
