import React from 'react'
import Rest from '../utils/rest'

const baseURL = 'https://mymoney-figormartins.firebaseio.com/'
const { useGet } = Rest(baseURL)

const Movimentacoes = (props) => {
  const data = useGet(`movimentacoes/${props.match.params.data}`)

  return (
    <div className='container'>
      <h1>Movimentações</h1>
      <table className='table'>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {
            data.data &&
            Object
              .keys(data.data)
              .map(movimentacao => {
                return (
                  <tr>
                    <td>{data.data[movimentacao].descricao}</td>
                    <td>{data.data[movimentacao].valor}</td>
                  </tr>
                )
              })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Movimentacoes