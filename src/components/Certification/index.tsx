'use client'
import { Title } from '@/components/Title'
import { Section } from '@/components/Section'
import styled from 'styled-components'

export function Certification() {
    const certifications = [
        {
            image: '/ipa.svg',
            name: '基本情報技術者',
            acquisition: '2022/04 取得',
        },
    ]
    return (
        <Section id="certification">
            <Title text="保有資格" />
            <Grid>
                {certifications.map((certification, index) => (
                    <IconAndText key={index}>
                        <img src={certification.image} />
                        <div>
                            <p>{certification.name}</p>
                            <p>{certification.acquisition}</p>
                        </div>
                    </IconAndText>
                ))}
            </Grid>
        </Section>
    )
}

const IconAndText = styled.div`
    display: flex;
    gap: 16px;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 32px;
`
