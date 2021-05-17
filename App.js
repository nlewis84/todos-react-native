import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { render } from "react-dom";
import { StyleSheet, ScrollView, TextInput, View } from "react-native";
import Heading from "./src/components/Heading";
import Input from "./src/components/Input";

class App extends Component {
    constructor() {
        super();
        this.state = {
            inputValue: "",
            todos: [],
            type: "All",
        };
    }
    inputChange(inputValue) {
        console.log(" Input Value: ", inputValue);
        this.setState({ inputValue });
    }
    render() {
        const { inputValue } = this.state;
        return (
            <View style={styles.container}>
                <ScrollView
                    keyboardShouldPersistTaps="always"
                    style={styles.content}
                >
                    <Heading />
                    <Input
                        inputValue={inputValue}
                        inputChange={(text) => this.inputChange(text)}
                    />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },
    content: {
        flex: 1,
        paddingTop: 60,
    },
});

export default App;
