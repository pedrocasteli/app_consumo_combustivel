import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
    View,
    Text,
    TextInput,
    Pressable,
    StyleSheet,
    Keyboard,
    TouchableWithoutFeedback,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function PrimeiraTela({ navigation }) {
    const [km, setKm] = useState("");
    const [litros, setLitros] = useState("");

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <LinearGradient
                colors={["rgb(250, 97, 80)", "rgb(199, 26, 101)"]}
                start={[0.2, 0.2]}
                end={[0.7, 1]}
                style={styles.background}
            >
                <View style={styles.card}>
                    <View style={styles.form}>
                        <Text style={styles.label}>
                            Quilometragem do veículo
                        </Text>
                        <TextInput
                            style={styles.input}
                            keyboardType="numeric"
                            value={km}
                            onChangeText={(e) => {
                                setKm(e);
                            }}
                        />
                    </View>
                    <View style={styles.form}>
                        <Text style={styles.label}>Quantidade de litros</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType="numeric"
                            value={litros}
                            onChangeText={(e) => {
                                setLitros(e);
                            }}
                        />
                    </View>
                    <Pressable
                        style={
                            (styles.botao,
                            km !== "" && litros !== ""
                                ? styles.habilitado
                                : styles.botao)
                        }
                        onPress={() => {
                            navigation.navigate("Segunda", {
                                quilometragem: km,
                                litros: litros,
                            }),
                                setKm(""),
                                setLitros("");
                        }}
                        disabled={km === "" && litros === ""}
                    >
                        <Text style={styles.text}>Calcular</Text>
                    </Pressable>
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
        height: "40%",
        borderRadius: 10,
    },
    form: {
        width: "100%",
        marginBottom: 15,
    },
    label: {
        marginBottom: 5,
        fontWeight: "500",
    },
    input: {
        alignContent: "center",
        width: "100%",
        height: 40,
        padding: 10,
        borderRadius: 5,
        backgroundColor: "rgb(242, 242, 247)",
    },
    botao: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgb(229, 229, 234)",
        padding: 15,
        width: "100%",
        marginTop: 15,
        borderRadius: 10,
    },
    habilitado: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        width: "100%",
        marginTop: 15,
        borderRadius: 10,
        backgroundColor: "rgb(50, 173, 230)",
    },
    text: {
        color: "#ffffff",
    },
});
