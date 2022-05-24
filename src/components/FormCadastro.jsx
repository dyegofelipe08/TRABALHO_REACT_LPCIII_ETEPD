import React from 'react'
import CamposObrigatorios from './CamposObrigatorios';
import MensagemSucesso from './MensagemSucesso';
import ProdutoSevice from '../app/ProdutoService';
import { withRouter } from 'react-router-dom';

class FormCadastro extends React.Component {

    state = {
        nome: '',
        codigo: '',
        descricao: '',
        preco: 0,
        fornecedor: '',
        sucesso: false,
        errors:[],
        
       
    }
    componentDidMount() {
        const codigo = this.props.match.params.codigo
        if (codigo) {
            const resultado = this.service.obterProduto().filter( produto => produto.codigo === codigo)

            if (resultado.length === 1){
                const produtoEncontrado = resultado[0]
                this.setState({ ...produtoEncontrado })
            }
        }
    }

    constructor() {
        super()
        this.service = new ProdutoSevice();
    }
   

    onChange = (event) => {
        const valor = event.target.value
        const nomeDOCampo = event.target.name
        this.setState({
            [nomeDOCampo]: valor
        })
    }
    limparCampos() {
        this.setState({
            nome: '',
            codigo: '',
            descricao: '',
            preco: 0,
            fornecedor: '',
            sucesso: false,
           

        })

    }

    onSubmite = (event) => {
        const produto = {
            'nome': this.state.nome,
            'codigo': this.state.codigo,
            'descricao': this.state.descricao,
            'preco': this.state.preco,
            'fornecedor': this.state.fornecedor,

        }
        try {
            this.service.salvar(produto)
            this.limparCampos()
            this.setState({ sucesso: true })
        } catch (erro) {
            const errors = erro.errors
            this.service.validar(errors)
            this.setState({ errors: errors })
            

        }


    }

    render() {
        return (
            <div className='container my-4'>
                <h1 className='text-center my-4'>Cadastrar produto</h1>

                {
                    this.state.errors.length > 0 &&

                    this.state.errors.map(msg => {
                        return (
                            <div className="alert alert-dismissible alert-danger">
                            <button type="button" className="btn-close" data-bs-dismiss="alert">&times;</button>
                            <strong>Erro!</strong> {msg}
                          </div>
                        )
                    })
                }

                {
                    this.state.sucesso ? (<MensagemSucesso />) : (<></>)
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
                            onChange={this.onChange} />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="fornecedor">Fornecedor: *</label>
                            <input type="text"
                                className="form-control"
                                id="fornecedor"
                                name='fornecedor'
                                value={this.state.fornecedor}
                                onChange={this.onChange} />
                        </div>
                    </div>

                    <div className='botaoPosition m-4'>
                        <button onClick={this.onSubmite} type='button' className="btn btn-primary">ENVIAR</button>
                    </div>
                    <div className='botaoPosition m-4'>
                        <button onClick={this.limparCampos} type='submit' className="btn btn-primary">LIMPAR CAMPOS</button>
                    </div>
                </form>
                <CamposObrigatorios />

            </div>
        );
    }
}

export default withRouter(FormCadastro);