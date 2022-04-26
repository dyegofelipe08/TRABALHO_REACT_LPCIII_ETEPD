import React from 'react'
import CamposObrigatorios from './CamposObrigatorios';

const FormCadastro = () => {
    return (
        <div className='container my-4'>
            <h1 className='text-center my-4'>Cadastro de Produtos</h1>
        <form>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="nome">Nome: *</label>
                    <input type="text" className="form-control" id="nome" placeholder="Nome" />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="codigo">Código: *</label>
                    <input type="text" className="form-control" id="codigo" placeholder="Código" />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="descricao">Descrição: *</label>
                <textarea type="text" className="form-control" id="descricao" placeholder="Descrição do produto..." />
            </div>
            <div className="form-group">
                <label htmlFor="preco">Preço: *</label>
                <input type="text" className="form-control" id="preco" placeholder="R$" />
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="fornecedor">Fornecedor: *</label>
                    <input type="text" className="form-control" id="fornecedor" />
                </div>
            </div>
           
            <div className='botaoPosition m-4'>
            <button type="submit" className="btn btn-primary">ENVIAR</button>
            </div>
        </form>
        <CamposObrigatorios/>
       
    </div>
    );
}

export default FormCadastro;