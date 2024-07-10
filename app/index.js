import { useState } from "react";
import { Button, Image, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, View } from "react-native";

const Home = () => {

    const [userText, updateUserText] = useState("");
    const [inputText, changeInputText] = useState("");

    return (
        <ScrollView contentContainerStyle={{alignItems: 'center', justifyContent: 'center', gap: 50, height: '100%'}}>
            <Image
                source={{
                    uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
                }}
                style={{width: 200, height: 200, alignSelf: 'center'}}
            />
            <KeyboardAvoidingView style={{width: '80%'}} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <View style={{width: '100%', gap: 32}}>
                        <TextInput
                            style={{
                                height: 50,
                                width: '100%',
                                alignSelf: 'center',
                                borderColor: 'gray',
                                borderWidth: 1,
                                borderRadius: 5,
                                padding: 8
                            }}
                            placeholder="You can type in me"
                            onChangeText={value => changeInputText(value)}
                            onSubmitEditing={e => {
                                updateUserText(inputText);
                            }}
                            onKeyPress={e => {
                                if(e.key === 'Enter') {
                                    updateUserText(inputText)
                                }
                            }}
                        />
                        <Button
                            onPress={() => updateUserText(inputText)}
                            title="Apply changes"
                        />
                </View>
            </KeyboardAvoidingView> 
            <Text>{userText}</Text>
        </ScrollView>
    );

}

export default Home;