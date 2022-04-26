import React from "react";

const Consulta = () => {
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
                    <tr>
                        <th scope="row">Produto A</th>
                        <td>00001</td>
                        <td>Descrição do produto A.</td>
                        <td>200,00</td>
                        <td>Fornecedor 1</td>
                    </tr>
                    <tr>
                        <th scope="row">Produto B</th>
                        <td>00002</td>
                        <td>Descrição do produto B.</td>
                        <td>400,00</td>
                        <td>Fornecedor 2</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Consulta;