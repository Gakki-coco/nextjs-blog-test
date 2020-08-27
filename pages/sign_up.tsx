import {NextPage} from 'next'
import {useCallback, useState} from 'react'
import axios from 'axios'

const signUp: NextPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        passwordConfirmation: ''
    })
    const onSubmit = useCallback((e)=> {
        e.preventDefault()
        axios.post('/api/v1/users', formData)
    }, [formData])
    return (
        <>
            <h1>注册</h1>
            {JSON.stringify(formData)}
            <form onSubmit={onSubmit}>
                <div>
                    <label>用户名
                        <input type="text" value={formData.username}
                               onChange={e => setFormData({
                                   ...formData,
                                   username: e.target.value
                               })}
                        />
                    </label>
                </div>
                <div>
                    <label>密码
                        <input type="password" value={formData.password}
                               onChange={e => setFormData({
                                   ...formData,
                                   password: e.target.value
                               })}
                        />
                    </label>
                </div>
                <div>
                    <label>重复密码
                        <input type="password" value={formData.passwordConfirmation}
                               onChange={e => setFormData({
                                   ...formData,
                                   passwordConfirmation: e.target.value
                               })}
                        />
                    </label>
                </div>
                <div>
                    <button type="submit">注册</button>
                </div>
            </form>
        </>

    )
}

export default signUp