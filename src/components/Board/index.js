import React, { useState } from 'react';
import BoardContext from './context';
import { Container } from './styles';
import List from '../List';
import { loadLists } from '../../services/api';

const data = loadLists();

export default function Board() {
    const [lists, setLists] = useState(data);

    const move = (from, to) => {};

    return (
        <BoardContext.Provider value={{ lists, move }}>
            <Container>
                {lists.map(list => (
                    <List key={list.title} data={list} />
                ))}
            </Container>
        </BoardContext.Provider>
    );
}
