'use client'
import { Title } from '@/components/Title'
import { Section } from '@/components/Section'
import { Table } from '@/components/Table'
import styled from 'styled-components'

export function Career() {
    const data = [
        {
            name: '事務業務効率化用のマクロ作成',
            phase: '自動集計シート作成',
            environment: 'VBA',
            end: 'マクロ作成',
        },
        {
            name: '小売向け在庫管理端末のアプリ開発',
            phase: '管理画面の実装',
            environment: 'Flutter, dart',
            end: 'PG',
        },
        {
            name: '小売向けサイネージコンテンツ管理システム新規開発',
            phase: '画面設計、管理画面の実装・テスト',
            environment: 'Typescript, React, styled components',
            end: 'フロントエンド',
        },
        {
            name: '小売向けレシートクーポン管理システム新規開発',
            phase: '管理画面の実装・テスト',
            environment: 'Typescript, React, Material UI',
            end: 'フロントエンド',
        },
    ]
    return (
        <Section id="career">
            <Title text="経歴" />
            <TableWrapper>
                {data.map((data, index) => (
                    <Table
                        key={index}
                        name={data.name}
                        phase={data.phase}
                        environment={data.environment}
                        end={data.end}
                    />
                ))}
            </TableWrapper>
        </Section>
    )
}

const TableWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
`
