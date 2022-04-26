import React from 'react'
import CamposObrigatorios from './CamposObrigatorios';

const FormContato = () =>{
    return(
        <div className='container my-4'>
            <h1 className='text-center'>Fale conosco</h1>
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="nome">Nome: *</label>
                        <input type="text" className="form-control" id="nome" placeholder="Nome completo" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="email">Email: *</label>
                        <input type="email" className="form-control" id="email" placeholder="Email" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="inputAddress">Endereço:</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="Seu endereço completo" />
                </div>
                <div className="form-group">
                    <label htmlFor="mensagem">Mensagem: *</label>
                    <textarea type="text" className="form-control" id="mensagem" placeholder="Digite o motivo do seu contato    " />
                </div>
                <div className='botaoPosition m-4'>
                <button type="submit" className="btn btn-primary">ENVIAR</button>
                </div>
            </form>
            <CamposObrigatorios/>
        </div>
    )
}

export default FormContato;