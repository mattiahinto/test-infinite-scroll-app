import styled from 'styled-components'
import { bp, rem } from '../../utils/Theme'

export const StyledList = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 0 ${rem(20)};

  @media (${bp.desktop}) {
    justify-content: space-between;
  }
`

export const StyledListHiddenLoadMore = styled.div`
  opacity: 0;
  pointer-events: none;
`
