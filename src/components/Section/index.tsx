'use client'
import styled from 'styled-components'

interface Props {
    id: string
    children: React.ReactNode
}

export function Section({ id, children }: Props) {
    return <Box id={id}>{children}</Box>
}

const Box = styled.section`
    width: 100%;
    padding-top: 80px;
`
