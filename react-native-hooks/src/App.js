import React, { useState } from 'react';
import styled from 'styled-components/native';
import Button from './components/Button';
import Counter from './components/Counter';
import Form from './components/Form';
import Length from './components/Length';
import Dog from './components/Dog';
import { useFetch } from './hooks/useFetch';

const Container = styled.View`
    flex: 1;
    background-color: #fff;
    justify-content: center;
    align-items: center;
`;



const App = () => {
    //const [isVisible, setIsVisible] = useState(true);

    const [reload, setReload] = useState(true);

    return (
        // <Container>
        //     <Button
        //         title={isVisible ? 'Hide' : 'Show'}
        //         onPress={() => setIsVisible(prev => !prev)}
        //     />
        //     {isVisible && <Form />}
        // </Container>

        // <Container>
        //     <Length />
        // </Container>

        <Container>
            <Button
                title="refresh"
                onPress={() => setReload(prev => !prev)}
            />
            {reload && <Dog />}
            {reload || <Dog />}
        </Container>
    );
};

export default App;