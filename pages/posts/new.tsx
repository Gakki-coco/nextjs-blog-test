import {NextPage} from 'next'
import {useCallback, useState} from 'react'
import {Form} from 'components/Form'

const PostsNew: NextPage = ()=> {
    const [formData, setFormData] = useState({
        title: '',
        content: ''
    })
    const [errors, setErrors] = useState({
        title: [],
        content: []
    })
    const onSubmit = useCallback((e) => {
        e.preventDefault()
    }, [formData])

    const onChange = useCallback((key, value) => {
        setFormData({
            ...formData,
            [key]: value
        })
    }, [formData])
    return (
        <>
            <Form onSubmit={onSubmit}
                  fields={[
                      {
                          label: '标题', type: 'text', value: formData.title,
                          onChange: e => onChange('title', e.target.value),
                          errors: errors.title
                      },
                      {
                          label: '内容', type: 'textarea', value: formData.content,
                          onChange: e => onChange('content', e.target.value),
                          errors: errors.content
                      }
                  ]}
                  buttons={<>
                      <button type="submit">提交</button>
                  </>}
            />
        </>
    )
}

export default PostsNew