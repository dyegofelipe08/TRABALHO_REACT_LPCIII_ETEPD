import React from 'react'
import { Link } from 'react-router-dom';

const BotaoCadastro = () => {
    return (

        <div className='botaoPosition'>
         <Link className='btn btn-primary' to='/cadastro-produtos' >Clique aqui</Link>
            
        </div>


    )

}
export default BotaoCadastro;