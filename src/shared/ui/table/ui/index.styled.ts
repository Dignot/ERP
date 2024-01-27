import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const TableWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  position: relative;
  & > div {
    height: fit-content;
  }
`

export const TableDisableWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: calc(100% - 10px);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.2;
  background: grey;
  z-index: 120;
  border-radius: 1rem;
`

export const TableTitle = styled.h1`
  ${() => css`
    margin: 16px 0 0;
    font-size: 14px;
    text-transform: uppercase;
    word-break: break-all;
  `}
`

export const TableActions = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
`
