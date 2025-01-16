'use client'
import styled from 'styled-components'

export function Header() {
    return (
        <Box>
            <TextArea>
                <Text>Sakana</Text>
                <p>ポートフォリオ</p>
            </TextArea>
        </Box>
    )
}

const Box = styled.div`
    width: 100%;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`

const TextArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const Text = styled.h1`
    font-size: 64px;
    letter-spacing: 0.2rem;
`
