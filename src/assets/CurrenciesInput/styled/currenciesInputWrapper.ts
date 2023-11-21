import styled from 'styled-components'

export const CurrenciesInputWrapper = styled.div<{ fullWidth?: boolean }>`
  display: flex;
  gap: 10px;
  width: ${props => (props.fullWidth ? '100%' : '50%')};
  flex-direction: column;

  & > label {
    font-size: 12px;
    line-height: 12px;
    color: var(--surface-600);
    font-weight: 400;
    font-family: var(--font-family);
    text-transform: capitalize;
  }
`

export const CurrenciesInputContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;

  & > div {
    width: 23.75% !important;
    background: #f8f9fa;
    border: 1px solid #ced4da;
    padding: 10px;
    border-radius: 6px;
  }
`
