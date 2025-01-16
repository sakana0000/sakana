'use client'
import styled from 'styled-components'

interface Props {
    text: string
}

export function Title({ text }: Props) {
    return <Text>{text}</Text>
}

const Text = styled.p`
    font-size: 32px;
    font-weight: bold;
    padding-bottom: 40px;
`
