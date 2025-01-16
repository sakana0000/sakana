'use client'
import { Navigation } from '@/components/Navigation'
import { Profile } from '@/components/Profile'
import { Header } from '@/components/Header'
import { Skill } from '@/components/Skill'
import { Certification } from '@/components/Certification'
import styled from 'styled-components'
import { Career } from '@/components/Career'

export default function Home() {
    return (
        <div>
            <Navigation />
            <Display>
                <Header />
                <Profile />
                <Skill />
                <Certification />
                <Career />
            </Display>
        </div>
    )
}

const Display = styled.main`
    padding: 0px 20%;
    background-image: url('/background.svg');
    background-repeat: repeat;

    & > *:last-child {
        padding-bottom: 80px;
    }
`
