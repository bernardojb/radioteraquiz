import React from 'react';

//Components
import Intro from '../components/1-Intro/Intro'
import Funcionamento from '../components/2-Como_Funciona/CF'
import Gamification from '../components/3-Gamificação/Gamification'
import Planos from '../components/4-Planos/Planos'
import FAQ from '../components/5-FAQ/FAQ'

export default function Home() {
    return (
        <>
            <Intro />
            <Funcionamento />
            <Gamification />
            {/* <Planos /> */}
            <FAQ />
        </>
    );
}
