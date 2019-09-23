import React, { useRef } from 'react';
import { Container, Label } from './styles';
import { useDrag, useDrop } from 'react-dnd';

export default function Card({ data, index }) {
    const ref = useRef();

    const [{ isDragging }, dragRef] = useDrag({
        item: { type: 'CARD', index },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const [, dropRef] = useDrop({
        accept: 'CARD',
        hover(item, monitor) {
            const draggedIndex = item.index;
            const targetIndex = index;

            if (draggedIndex == targetIndex) {
                return;
            }
            console.log(item);
        },
    });

    dragRef(dropRef(ref));

    return (
        <Container ref={ref} isDragging={isDragging}>
            <header>
                {data.labels.map(label => (
                    <Label key={label} color={label} />
                ))}
            </header>
            <p>{data.content}</p>
            {data.user && <img src={data.user} alt="" />}
        </Container>
    );
}
