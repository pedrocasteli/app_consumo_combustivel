import {
    View,
    Text,
    TextInput,
    Pressable,
    StyleSheet,
    Keyboard,
    TouchableWithoutFeedback,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";

export default function SegundaTela(props) {
    useLayoutEffect(() => {
        console.log(props);
    }, []);

    const consumo = (
        props.route.params.quilometragem / props.route.params.litros
    ).toFixed(2);

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <LinearGradient
                colors={["rgb(247, 92, 40)", "rgb(242, 212, 58)"]}
                start={[0.2, 0.2]}
                end={[0.7, 1]}
                style={styles.background}
            >
                <View style={styles.card}>
                    <Text>A média de combustível foi:</Text>
                    <View style={styles.resultado}>
                        <Text style={styles.texto}>{consumo} Km/l</Text>
                        <Text style={styles.texto2}>
                            {consumo <= 4
                                ? "E"
                                : consumo <= 8
                                ? "D"
                                : consumo <= 10
                                ? "C"
                                : consumo <= 12
                                ? "B"
                                : "A"}
                        </Text>
                    </View>
                </View>
                <StatusBar style="auto" />
            </LinearGradient>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    background: {
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    card: {
        marginBottom: 300,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        padding: 20,
        backgroundColor: "#ffffff",
        width: "80%",
        height: "20%",
        borderRadius: 10,
    },
    resultado: {
        backgroundColor: "rgb(50, 173, 230)",
        paddingTop: 7,
        paddingLeft: 12,
        paddingRight: 12,
        paddingBottom: 6,
        borderRadius: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    texto: {
        color: "#ffffff",
        fontSize: 17,
        marginBottom: 2,
    },
    texto2: {
        color: "#ffffff",
        fontSize: 20,
        fontWeight: "bold",
    },
});
