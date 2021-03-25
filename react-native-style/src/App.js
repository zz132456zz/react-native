import React, {useState} from 'react';
import {StyleSheet, View, Text, Switch} from 'react-native';
import {viewStyles, textStyles} from './styles';


// ThemeProvider
import styled, {ThemeProvider} from 'styled-components/native';
import Button from './components/Button';
import Input from './components/Input';
import {lightTheme, darkTheme} from './theme';

const Container = styled.View`
    flex: 1;
    background-color: ${props => props.theme.background};
    align-items: center;
    justify-content: center;
`;

const App = () => {
    const [isDark, setIsDark] = useState(false);
    const _toggleSwitch = () => setIsDark(!isDark);

    return (
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
            <Container>
                <Switch value={isDark} onValueChange={_toggleSwitch}/>
                <Button title="Hanbit"/>
                <Button title="React Native"/>
                <Input borderColor="#3498db"/>
                <Input borderColor="#9b59b6"/>
            </Container>
        </ThemeProvider>
    );
};


/*
//스타일드 컴포넌트
import styled from 'styled-components/native';
import Button from './components/Button';
import { Contents } from './components/Layout';
import Input from './components/Input';

const Container = styled.View`
    flex: 1;
    background-color: #ffffff;
    align-items: center;
    justify-content: center;
`;

const App = () => {
    return (
        <Container>
            <Button title="Hanbit"/>
            <Button title="React Native"/>
            <Input borderColor="#3498db"/>
            <Input borderColor="#9b59b6"/>
        </Container>
    );
};
*/

/*
// 그림자
import ShadowBox from './components/ShadowBox';
const App = () => {
    return (
        <View style={viewStyles.container}>
            <ShadowBox/>
        </View>
    );
};
*/

/*
// flex와 범위
import {Header, Contents, Footer} from './components/Layout';
const App = () => {
    return (
        <View style={viewStyles.container}>
            <Header/>
            <Contents/>
            <Footer/>
        </View>
    );
};
*/

/*
// 외부 스타일 이용하기
import {viewStyles, textStyles} from './styles';

const App = () => {
    return (
        <View style={viewStyles.container}>
            <Text style={[textStyles.text, { color: 'green'}]}>
                Styles import - Text
            </Text>
            <Text style={[textStyles.text, textStyles.error]}>
                Styles import - Error
            </Text>
        </View>
    );
};
*/

/*
// 클래스 스타일링
const App = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Class Styling - Text</Text>
            <Text style={[styles.text, styles.error]}>Class Styling - error</Text>
            <Text style={[styles.text, { color: 'green'}]}>Class, Inline Styling</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        padding: 10,
        fontSize: 26,
        fontWeight: '600',
        color: 'black',
    },
    error: {
        fontWeight: '400',
        color: 'red',
    },
});
*/

/*
// 인라인 스타일링
const App = () => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Text
                style={{
                    padding: 10,
                    fontSize: 26,
                    fontWeight: '600',
                    color: 'black',
                }}
            >
                Inline Styling - Text
            </Text>
            <Text
                style={{
                    padding: 10,
                    fontSize: 26,
                    fontWeight: '400',
                    color: 'red',
                }}
            >
                Inline Styling - Error
            </Text>
        </View>
    );
};
*/

export default App;