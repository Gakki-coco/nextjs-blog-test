import {NextPage} from 'next'
import {useCallback, useState} from 'react'
import axios, {AxiosResponse} from 'axios'
import {Form} from '../components/Form'

const signUp: NextPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        passwordConfirmation: ''
    })
    const [errors, setErrors] = useState({
        username: [],
        password: [],
        passwordConfirmation: []
    })
    const onSubmit = useCallback((e) => {
        e.preventDefault()
        axios.post('/api/v1/users', formData)
            .then(() => {
                window.alert('注册成功')
                window.location.href = '/sign_in'
            }, (error) => {
                const response: AxiosResponse = error.response
                if (response) {
                    if (response.status === 422) {
                        setErrors(response.data)
                    }
                }
            })
    }, [formData])
    const onChange = useCallback((key, value) => {
        setFormData({
            ...formData,
            [key]: value
        })
    }, [formData])
    return (
        <>
            <h1>注册</h1>
            <Form onSubmit={onSubmit}
                  fields={[
                      {
                          label: '用户名', type: 'text', value: formData.username,
                          onChange: e => onChange('username', e.target.value),
                          errors: errors.username
                      },
                      {
                          label: '密码', type: 'password', value: formData.password,
                          onChange: e => onChange('password', e.target.value),
                          errors: errors.password
                      },
                      {
                          label: '重复密码', type: 'password', value: formData.passwordConfirmation,
                          onChange: e => onChange('passwordConfirmation', e.target.value),
                          errors: errors.passwordConfirmation
                      }
                  ]}
                  buttons={<>
                      <button type="submit">注册</button>
                  </>}
            />
        </>

    )
}

export default signUp