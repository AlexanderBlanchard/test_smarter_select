import React from 'react'
import styled from 'styled-components'

const PaginationContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
`

const PageItemContainer = styled.div`
  display: flex;
  align-items: center;
`

const PageItem = styled.button`
  border: 1px solid #D9DCE7;
  padding: 0.5rem 0.75rem;
  margin-left: -1px;
  line-height: 1.25;
  color: #676767;
  background-color: white;
  cursor: pointer;
  min-width: 40px;
  min-height: 40px;
  margin-left: 3px;
  margin-right: 3px;
  border-radius: 5px;

  &:hover {
    z-index: 2;
    color: #256EFF;
    background-color: #F1F6FF;
    border-color: #256EFF;
  }

  &:focus {
    z-index: 3;
    outline: 0;
  }

  &.active {
    z-index: 3;
    color: #256EFF;
    background-color: #F1F6FF;
    border-color: #256EFF;
  }
`

const Pagination = ({ page, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null

  const maxVisiblePages = Math.min(totalPages, 5) // max visible pages
  const halfVisiblePages = Math.floor(maxVisiblePages / 2)

  let startPage = Math.max(1, page - halfVisiblePages)
  let endPage = Math.min(totalPages, page + halfVisiblePages)

  // Ajustar los valores de startPage y endPage si estamos cerca de los bordes
  if (endPage - startPage < maxVisiblePages - 1) {
    if (page <= halfVisiblePages) {
      endPage = maxVisiblePages
    } else {
      startPage = totalPages - maxVisiblePages + 1
    }
  }

  const pages = []
  for (let p = startPage; p <= endPage; p++) {
    pages.push(
      <PageItemContainer key={p}>
        <PageItem
          onClick={() => onPageChange(p)}
          className={p === page ? 'active' : ''}
        >
          {p}
        </PageItem>
      </PageItemContainer>
    )
  }

  return (
    <PaginationContainer>
      {page > 1 && (
        <PageItem onClick={() => onPageChange(page - 1)}>{'<'}</PageItem>
      )}
      {startPage > 1 && (
        <>
          <PageItem onClick={() => onPageChange(1)}>1</PageItem>
          {startPage > 2 && <PageItem>...</PageItem>}
        </>
      )}
      {pages}
      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && <PageItem>...</PageItem>}
          <PageItem onClick={() => onPageChange(totalPages)}>{totalPages}</PageItem>
        </>
      )}
      {page < totalPages && (
        <PageItem onClick={() => onPageChange(page + 1)}>{'>'}</PageItem>
      )}
    </PaginationContainer>
  )
}

export default Pagination
