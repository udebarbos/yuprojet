import styles from './FormProject.module.css'
import InputType from '../form/InputType'
import SelectType from '../form/SelectType'
import SubmitButton from '../form/SubmitButton'
import { useEffect, useState } from 'react'

function FormProject({ btnText, handleSubmit, projectData }) {
    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})
    useEffect(() => {

        fetch("http://localhost:5000/categories", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((resp) => resp.json())
            .then((data) => {
                setCategories(data)
            })
            .catch((err) => {
                return console.log(err)
            })

    }, [])

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(project)
    }

    function handleOnChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value })
    }

    function handleCategory(e) {
        setProject({
            ...project,category:
            {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text,
            },
        })

    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <div>
                <InputType
                    type="text"
                    text="Nome do projeto"
                    name="name"
                    placeholder="Insira o nome do projeto"
                    handleOnChange={handleOnChange}
                    value={project.name ? project.name.id : ''}
                />
                <InputType
                    type="number"
                    text="Orçamento do projeto"
                    name="budget"
                    placeholder="Insira o orçamento"
                    handleOnChange={handleOnChange}
                    value={project.budget ? project.budget.id : ''}
                />
                <SelectType 
                text="selecione a categoria" 
                name="category_id" 
                options={categories} 
                handleOnChange={handleCategory} 
                value={ project.category ? project.category.id : ''}/>
                <SubmitButton text={btnText} />
            </div>
        </form>
    )

}
export default FormProject