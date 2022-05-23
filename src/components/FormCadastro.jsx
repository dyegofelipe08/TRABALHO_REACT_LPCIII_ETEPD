import React from 'react'
import CamposObrigatorios from './CamposObrigatorios';
import MensagemSucesso from './MensagemSucesso';
import ProdutoSevice from '../app/ProdutoService';

 export default class FormCadastro extends React.Component{

    state = {
        nome:'',
        codigo:'',
        descricao: '',
        preco: 0,
        fornecedor: '',
        sucesso: false,
    }

    constructor(){
        super()
        this.service = new ProdutoSevice();   
     }

    onChange = (event)=>{
        const valor = event.target.value
        const nomeDOCampo = event.target.name
        this.setState({
            [nomeDOCampo]:valor
        })
    }
    limparCampos(){
        this.setState({
            nome:'',
            codigo:'',
            descricao: '',
            preco: 0,
            fornecedor: '',
            sucesso: false,
    
        }) 
    
    }

    onSubmite = (event)=>{
        const produto = {
            'nome':this.state.nome,
            'codigo': this.state.codigo,
            'descricao': this.state.descricao,
            'preco':this.state.preco,
            'fornecedor':this.state.fornecedor,
        }
        
        this.service.salvar(produto)
        this.limparCampos()
        this.setState({sucesso:true})
    }

    render(){
        return(
<div className='container my-4'>
            <h1 className='text-center my-4'>Cadastro de Produtos</h1>

            {
                this.state.sucesso ? (<MensagemSucesso/>) : (<></>)
            }
        <form>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="nome">Nome: *</label>
                    <input type="text" 
                    className="form-control" 
                    id="nome" name='nome' 
                    placeholder="Nome" 
                    value={this.state.nome}
                    onChange={this.onChange} />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="codigo">Código: *</label>
                    <input type="text" 
                    className="form-control" 
                    id="codigo" 
                    name='codigo' 
                    placeholder="Código" 
                    value={this.state.codigo}
                    onChange={this.onChange} />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="descricao">Descrição: *</label>
                <textarea type="text" 
                className="form-control" 
                id="descricao" name='descricao' 
                placeholder="Descrição do produto..." 
                value={this.state.descricao}
                onChange={this.onChange} 
                />
            </div>
            <div className="form-group">
                <label htmlFor="preco">Preço: *</label>
                <input type="text" 
                className="form-control" 
                id="preco" name='preco' 
                placeholder="R$" 
                value={this.state.preco} 
                onChange={this.onChange}/>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="fornecedor">Fornecedor: *</label>
                    <input type="text" 
                    className="form-control" 
                    id="fornecedor" 
                    name='fornecedor' 
                    value={this.state.fornecedor} 
                    onChange={this.onChange}/>
                </div>
            </div>
        
            <div className='botaoPosition m-4'>
            <button onClick={this.onSubmite} type='button' className="btn btn-primary">ENVIAR</button>
            </div>
            <div className='botaoPosition m-4'>
            <button onClick={this.limparCampos} type='submit' className="btn btn-primary">LIMPAR CAMPOS</button>
            </div>
        </form>
        <CamposObrigatorios/>
       
    </div>
        );
    }
}
        