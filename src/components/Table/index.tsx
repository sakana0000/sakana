'use client'

import { themeColors } from '@/app/colors'
import styled from 'styled-components'

interface Props {
    name: string
    phase: string
    environment: string
    end: string
}

export function Table({ name, phase, environment, end }: Props) {
    return (
        <StyledTable>
            <tbody>
                <tr>
                    <th scope="row">プロジェクト</th>
                    <td>{name}</td>
                </tr>
                <tr>
                    <th scope="row">担当フェーズ</th>
                    <td>{phase}</td>
                </tr>
                <tr>
                    <th scope="row">開発環境</th>
                    <td>{environment}</td>
                </tr>
                <tr>
                    <th scope="row">担当</th>
                    <td>{end}</td>
                </tr>
            </tbody>
        </StyledTable>
    )
}

const StyledTable = styled.table`
    border: outset ${themeColors.text};
    width: 100%;
    border-collapse: collapse;

    tr {
        &:not(:last-child) {
            border-bottom: 1px solid ${themeColors.text};
        }
    }

    th {
        border-right: 1px solid ${themeColors.text};
        width: 140px;
        background-color: ${themeColors.background};
    }

    td {
        background-color: ${themeColors.white};
    }

    td,
    th {
        padding: 5px 15px;
    }
`
