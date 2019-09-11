import React from 'react'

import { Container } from './styles'
import { MdAdd } from 'react-icons/md'
import Card from '../Card'

export default function List({ data }) {
    return (
        <Container>
            <header>
                <h2>{data.title}</h2>
                {data.creatable && (
                    <buttom type="button">
                        <MdAdd size={24} color="#FFF" />
                    </buttom>
                )}
            </header>
            <ul>
                <Card />
                <Card />
                <Card />
            </ul>
        </Container>
    );
}
