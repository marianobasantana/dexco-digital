import React, { useState } from 'react'
import './App.css'
import { Button, Form, Input, Rate, Result } from 'antd'
import axios from 'axios'

function App() {
  const { TextArea } = Input
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState('form')

  const reset = () => {
    setLoading(false)
    setStatus('form')
  }

  const onFinish = async (values) => {
    setLoading(true)

    const { data } = await axios.post(
      'https://api.baserow.io/api/database/rows/table/343034/?user_field_names=true',
      {
        'note': values.rate,
        'comment': values?.comment || '',
        'userProjectId': ''
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Token ORMJeRqQ2hkasDF33Pf0jcjSqKtkhUna'
        }
      })

    console.log('Result', data)
    setStatus('success')
    setLoading(false)
  }

  const contentForm = (
    <Form
      name='basic'
      layout='vertical'
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      autoComplete='off'
      style={{ width: '100%' }}
    >
      <Form.Item name='rate' label='Qual nota o site merece?'
        rules={[
          {
            required: true,
            message: 'Adicione uma nota',
          },
        ]}>
        <Rate />
      </Form.Item>

      <Form.Item name='comment' label='Comentário'>
        <TextArea rows={4} />
      </Form.Item>

      <Form.Item
      >
        <Button type='primary' htmlType='submit' loading={loading}>
          Enviar
        </Button>
      </Form.Item>
    </Form>
  )

  const contentResult = (
    <Result
      status={status === 'success' ? 'success' : 'error'}
      title={status === 'success' ? 'Obrigado por responder nossa pesquisa' : 'Ocorreu um erro, tente novamente'}
      subTitle=''
      extra={[
        <Button type='primary' key='console' onClick={reset}>
          {status === 'success' ? 'Fechar' : 'Refazer'}
        </Button>
      ]}
    />
  )

  return (
    <div className='App' style={{ padding: '80px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {status === 'form' ? contentForm : contentResult}
    </div>
  )
}

export default App
