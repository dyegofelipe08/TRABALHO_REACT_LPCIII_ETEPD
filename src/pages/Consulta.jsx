import React from "react";
import { withRouter } from "react-router-dom";
import ProdutoSevice from "../app/ProdutoService";



class Consulta extends React.Component {
    state = {
        produtos: []
    }
    constructor() {
        super()
        this.service = new ProdutoSevice();
    }

    preparaEditar = (codigo) =>{
        this.props.history.push(`/cadastro-produtos/${codigo}`)
    }


    componentDidMount() {
        const produtos = this.service.obterProduto();
        this.setState({ produtos })
    }


    render() {
        return (

            <div className="container table-responsive">
                <h1 className="text-center my-4" >Tabela de Produtos</h1>
                <table className="table table-hover my-4">
                    <thead>
                        <tr  className="table-dark">
                            <th scope="col">Nome</th>
                            <th scope="col">Código</th>
                            <th scope="col">Descrição</th>
                            <th scope="col">Preço (R$)</th>
                            <th scope="col">Fornecedor</th>
                            <th scope="col" >Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.produtos.map(
                                produto => {
                                    return (
                                        <tr key={produto.codigo}>
                                            <th scope="row">{produto.nome}</th>
                                            <td>{produto.codigo}</td>
                                            <td> {produto.descricao} </td>
                                            <td>{produto.preco}</td>
                                            <td>{produto.fornecedor}</td>
                                            <td>
                                                <button onClick={()=> this.preparaEditar(produto.codigo)}  className="btn btn-primary mt-2" >Editar</button>
                                                <button className="btn btn-danger botaoPosition mt-2" >Remover</button>
                                            </td>
                                        </tr>

                                    )
                                }
                            )
                        }
                    </tbody>
                </table>
            </div>

        )

    }
}
export default withRouter(Consulta);


