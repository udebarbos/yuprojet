import { useState } from 'react'
import InputType from '../form/InputType'
import styles from '../project/FormProject.module.css'
import SubmitButton from '../form/SubmitButton'

function ServiceForm({handleSubmit, btnText, projectData}) {

    const [service, setService] = useState({})

    function submit(e) {
        e.preventDefault()
        projectData.services.push(service)
        handleSubmit(projectData)
    }
    function handleOnChange(e) {
        setService ({ ...service, [e.target.name]: e.target.value})
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <InputType
                type='text'
                text='Nome do serviço'
                name='name'
                placeholder='Insira o nome do serviço'
                handleOnChange={handleOnChange} />
            <InputType
                type='number'
                text='Custo do serviço'
                name='yuprojet'
                placeholder='Insira o valor do serviço'
                handleOnChange={handleOnChange} />
            <InputType
                type='text'
                text='Descrição'
                name='description'
                placeholder='Descreva o serviço'
                handleOnChange={handleOnChange} />
                <SubmitButton text = {btnText}/>
        </form>

    )
}
export default ServiceForm