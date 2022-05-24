const PRODUTOS = '_PRODUTOS';

export function errorValidacao(errors){
    this.errors = errors;
}

export default class ProdutoSevice {

    validar = (produto)=>{
        const errors = []

        if(!produto.nome){
            errors.push('O campo Nome é obrigatório.')
        }
        if(!produto.codigo){
            errors.push('O campo Código é obrigatório.')
        }
        if(!produto.preco || produto.preco<=0){
            errors.push('O campo Preço deve ter um valor maior que zero.')
        }
        if(!produto.fornecedor){
            errors.push('O campo Fornecedor é obrigatório.')
        }
        if(errors.length > 0){
            throw new errorValidacao(errors)
        }
    }

    obterProduto = () => {
        const produtos = localStorage.getItem(PRODUTOS)  
            return JSON.parse(produtos)

            
    }
    salvar = (produto) => {
        let produtos = localStorage.getItem(PRODUTOS)

        if (!produtos) {
            produtos = []
        } else {
            produtos = JSON.parse(produtos)
        }

        produtos.push(produto);
        localStorage.setItem(PRODUTOS, JSON.stringify(produtos))
    }

}


