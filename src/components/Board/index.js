import React, { useState } from 'react';
import BoardContext from './context';
import { Container } from './styles';
import List from '../List';
import { loadLists } from '../../services/api';
import immer from 'immer';

const data = loadLists();

export default function Board() {
    const [lists, setLists] = useState(data);

    function move(fromList, from, to) {
        setLists(
            immer(lists, draft => {
                const dragged = draft[fromList].cards[from];

                draft[fromList].cards.splice(from, 1);
                draft[fromList].cards.splice(to, 0, dragged);
            })
        );
    }

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
