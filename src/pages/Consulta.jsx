import React from "react";
import ProdutoSevice from "../app/ProdutoService";

export default class Consulta extends React.Component {
    state = {
        produtos:[]
    }
    constructor(){
        super()
        this.service = new ProdutoSevice();
    }
    componentDidMount(){
        const produtos = this.service.obterProduto();
        this.setState({produtos})
    }


    render() {
        return (

            <div className="container table-responsive">
                <h1 className="text-center my-4" >Tabela de Produtos</h1>
                <table className="table table-hover my-4">
                    <thead>
                        <tr className="table-dark">
                            <th scope="col">Nome</th>
                            <th scope="col">Código</th>
                            <th scope="col">Descrição</th>
                            <th scope="col">Preço (R$)</th>
                            <th scope="col">Fornecedor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.produtos.map(
                                produto => {
                                    return (
                                        <tr>
                                            <th scope="row">{produto.nome}</th>
                                            <td>{produto.codigo}</td>
                                            <td> {produto.descricao} </td>
                                            <td>{produto.preco}</td>
                                            <td>{produto.fornecedor}</td>
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


