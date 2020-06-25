import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import Text from 'app/components/core/Text'
import Button from 'app/components/core/Button'

import { Container } from './styled'

const Pagination = ({ array, setArray }) => {
  const [current, setCurrent] = useState(0)

  const ITEMS_TO_SHOW = 25
  const n = Math.ceil(array.length / ITEMS_TO_SHOW)
  const sliceStart = current * ITEMS_TO_SHOW
  const sliceEnd =
    sliceStart + ITEMS_TO_SHOW > array.length
      ? array.length
      : sliceStart + ITEMS_TO_SHOW

  const buttonsIndex = [
    current - 2,
    current - 1,
    current + 0,
    current + 1,
    current + 2,
  ]

  const renderButtons = () =>
    buttonsIndex.map(index =>
      <Button
        key={index}
        minWidth='30px'
        active={index === current}
        disabled={index < 0 || index >= n}
        onClick={() => setCurrent(index)}
      >
        {
          index < 0 || index >= n
            ? '-'
            : index + 1
        }
      </Button>
    )

  useEffect(() => {
    setArray(
      array.slice(sliceStart, sliceEnd)
    )
  }, [current])

  return (
    <Container>
      <Text padding='0 0 1rem 0'>
        {`${sliceStart}-${sliceEnd} / ${array.length}`}
      </Text>

      <Button
        onClick={() => setCurrent(0)}
        disabled={!current}
      >
        {'<<'}
      </Button>

      <Button
        onClick={() => setCurrent(current - 1)}
        disabled={!current}
      >
        {'<'}
      </Button>

      {renderButtons()}

      <Button
        onClick={() => setCurrent(current + 1)}
        disabled={current === n - 1}
      >
        {'>'}
      </Button>
      <Button
        onClick={() => setCurrent(n - 1)}
        disabled={current === n - 1}
      >
        {'>>'}
      </Button>
    </Container>
  )
}

Pagination.propTypes = {
  array: PropTypes.array,
  setArray: PropTypes.func,
}

export default Pagination
