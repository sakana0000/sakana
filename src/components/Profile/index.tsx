'use client'
import { themeColors } from '@/app/colors'
import styled from 'styled-components'
import { Title } from '@/components/Title'

export function Profile() {
    return (
        <Section id="profile">
            <Title text="プロフィール" />
            <Row>
                <img src="/profile.svg" />
                <p>
                    こんにちは！sakanaと申します。
                    <br />
                    <br />
                    2020年に新卒で半導体メーカーに就職し、半導体開発エンジニアのアシスタント業務に携わりました。
                    主に、新規開発機種の性能測定・既存機種の不良品解析を担当していました。これらの結果集計をVBAを使って自動化し、業務効率化に取り組んでいました。
                    <br />
                    <br />
                    その後、ITエンジニアになるために転職し、現在はフロントエンジニアとして小売企業の業務支援システムの開発を担当しています。
                    <br />
                    <br />
                    よろしくお願いします！
                </p>
            </Row>
        </Section>
    )
}

const Section = styled.div`
    width: 100%;
    background-color: ${themeColors.background};
    padding: 60px;
    border-radius: 10px;
`
const Row = styled.div`
    display: flex;
    gap: 80px;
`
