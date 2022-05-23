const PRODUTOS = '_PRODUTOS';

export default class ProdutoSevice {

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


