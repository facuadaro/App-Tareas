import React from 'react'
import { Header as Head , Icon} from 'semantic-ui-react'
import './Components.css'

function Header() {
  return (
    <div className='header'>
        <Head as="h1" icon textAlign='center' color='violet' >
            <Icon inverted color="violet" name='list alternate outline' circular ></Icon>
            <Head.Content className='contenido'>Listado de tareas</Head.Content>
        </Head>
    </div>
  )
}

export default Header