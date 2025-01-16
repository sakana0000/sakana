'use client'
import { themeColors } from '@/app/colors'
import styled from 'styled-components'

export function Navigation() {
    const sections = [
        { id: '#profile', name: 'プロフィール' },
        { id: '#skill', name: 'スキル' },
        { id: '#certification', name: '保有資格' },
        { id: '#career', name: '経歴' },
    ]
    return (
        <AppBar>
            <List>
                {sections.map((section) => (
                    <Listitem key={section.id}>
                        <Link href={section.id}>{section.name}</Link>
                    </Listitem>
                ))}
            </List>
        </AppBar>
    )
}

const AppBar = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0px 40px;
    z-index: 1;
    border-bottom: 1px solid #a9a9a9;
    background-color: ${themeColors.white};
`

const List = styled.ul`
    display: flex;
`

const Listitem = styled.li`
    list-style-type: none;
    padding: 20px 24px;
`

const Link = styled.a`
    list-style-type: none;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        opacity: 0.7;
    }
`
