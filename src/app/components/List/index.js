import React from 'react'

import Card from 'app/components/Card'
import { MdAdd } from 'react-icons/md'
import { Container } from './style'

export default function List({ data, index: listIndex }) {
  return (
    <Container done={data.done}>
      <header>
        <h2>{data.title}</h2>
        {data.creatable && (
          <button type="buttom">
            <MdAdd size={24} color="#FFF" />
          </button>
        )}
      </header>

      <ul>
        {data.cards.map((item, index) => (
          <Card key={item.id} index={index} listIndex={listIndex} data={item} />
        ))}
      </ul>
    </Container>
  )
}
