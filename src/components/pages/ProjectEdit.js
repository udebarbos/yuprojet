import styles from './ProjectEdit.module.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {parse, v4 as uuidv4 } from 'uuid'
import Loading from '../layout/Loading'
import Message from '../layout/Message'
import Container from '../layout/Container'
import FormProject from '../project/FormProject'
import ServiceForm from '../service/ServiceForm'
import ServiceCard from '../service/ServiceCard'

function ProjectEdit() {

    const { id } = useParams()
    const [project, setProject] = useState([])
    const [services, setServices] = useState ([])
    const [message, setMessage] = useState()
    const [type, setType] = useState()
    const [showProjectForm, setShowProjectForm] = useState(false)
    const [showServiceForm, setShowServiceForm] = useState(false)
    console.log(id)

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5000/projects/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then((resp) => resp.json())
                .then((data) => {
                    setProject(data)
                    setServices(data.services)
                })
                .catch((err) => console.log(err))
        }, 1000)
    }, [id])

    function editPost(project) {
        //budget validation
        if (project.budget < project.cust) {
            setMessage ('O orçamento não pode ser menor que o custo do projeto!')
            setType ('error')
        }
        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        }).then(resp => resp.json())
            .then((data) => {
                setProject(data)
                setShowProjectForm(false)
                setMessage ('Projeto atualizado!')
                setType ('sucess')
            })
            .catch((err) => console.log(err))
    }

    function createService (project){
    
        const lastService = project.services[project.services.length - 1]
         lastService.id = uuidv4()
         const lastServiceCust = lastService.yuprojet

         const newCust = parseFloat(project.yuprojet) + parseFloat (lastServiceCust)

         //validação do  maximo de custo
         if(newCust > parseFloat (project.budget)){
            setMessage('Orçamento ultrapassado, verifique o valor do serviço')
            setType('error')
            project.services.pop()
            return false
         }
         //adicionando o serviço ao custo total do projeto
         project.yuprojet = newCust
         //atualizando projeto
         fetch(`http://localhost:5000/projects/${project.id}`,{
            method: 'PATCH',
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify(project)
         }).then((resp) => resp.json())
            .then((data) => {
                setShowServiceForm(false)
                console.log(data)
            })
            .catch(err => console.log(err))


    }

    function removeService(id, yuprojet){

        const servicesUpdated = project.services.filter(
            (service) => service.id !== id
        )
        const projectUpdated = project

        projectUpdated.services = servicesUpdated
        projectUpdated.yuprojet = parseFloat(projectUpdated.yuprojet) - parseFloat(yuprojet)
        
        fetch(`http://localhost:5000/projects/${projectUpdated.id}`,{
            method: 'PATCH',
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify(projectUpdated)
         }).then((resp) => resp.json())
            .then((data) => {
                setProject(projectUpdated)
                setServices(servicesUpdated)
                setMessage('Serviço removido com sucesso')
            })
            .catch(err => console.log(err))
        
    }

    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm)
    }

    function toggleServiceForm() {
        setShowServiceForm(!showServiceForm)
    }

    return (
        <>
            {project.name ? (
                <div className={styles.project_details}>
                    <Container customClass="column">
                        {message && <Message type={type} msg={message}/>}
                        <div className={styles.details_container}>
                            <h1>Projeto: {project.name}</h1>
                            <button className={styles.btn} onClick={toggleProjectForm}>
                                {!showProjectForm ? 'Editar projeto' : 'Fechar'}
                            </button>
                            {!showProjectForm ? (
                                <div className={styles.project_info}>
                                    <p>
                                        <span>Categoria:</span> {project.category.name}
                                    </p>
                                    <p>
                                        <span>Total de Orçamento:</span> R${project.budget}
                                    </p>
                                    <p>
                                        <span>Total utilizado:</span> R${project.yuprojet}
                                    </p>
                                </div>
                            ) : (
                                <div className={styles.project_info}>
                                    <FormProject
                                        handleSubmit={editPost}
                                        btnText="Concluir"
                                        projectData={project} />
                                </div>
                            )
                            }
                        </div>
                        <div className={styles.service_form_container}>
                            <h2>Adicione um serviço:</h2>
                            <button className={styles.btn} onClick={toggleServiceForm}>
                                {!showServiceForm ? 'Adicionar serviço' : 'Fechar'}
                            </button>
                            <div className={styles.project_info}>
                                {showServiceForm &&
                                    <ServiceForm
                                    handleSubmit={createService}
                                    btnText="Adicionar Serviço"
                                    projectData={project}
                                    />}
                            </div>
                        </div>
                        <h2>Serviços</h2>
                        <Container customClass="start">
                            {services.length > 0 &&
                             services.map((service) => (
                               <ServiceCard
                                id= {service.id}
                                name= {service.name}
                                yuprojet= {service.yuprojet}
                                descripition= {service.description}
                                key= {service.id}
                                handleRemove = {removeService}
                               />

                             ))
                            }
                            {services.length === 0 && <p>Não há serviços cadastrados.</p>}
                        </Container>
                    </Container>
                </div>
            ) : (
                <Loading />
            )}
        </>
    )
}
export default ProjectEdit