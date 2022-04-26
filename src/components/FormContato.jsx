import React from 'react'

const FormContato = () =>{
    return(
        <div className='container my-4'>
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputEmail4">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputPassword4">Senha</label>
                        <input type="password" className="form-control" id="inputPassword4" placeholder="Senha" />
                    </div>
                </div>
                <div className="form-group">
                    <label for="inputAddress">Endereço</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="Rua dos Bobos, nº 0" />
                </div>
                <div className="form-group">
                    <label for="inputAddress2">Endereço 2</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartamento, hotel, casa, etc." />
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputCity">Cidade</label>
                        <input type="text" className="form-control" id="inputCity" />
                    </div>
                    <div className="form-group col-md-4">
                        <label for="inputEstado">Estado</label>
                        <select id="inputEstado" className="form-control">
                            <option selected>Escolher...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div className="form-group col-md-2">
                        <label for="inputCEP">CEP</label>
                        <input type="text" className="form-control" id="inputCEP" />
                    </div>
                </div>
               
                <div className='botaoPosition m-4'>
                <button type="submit" className="btn btn-primary">ENVIAR</button>
                </div>
                
            </form>
        </div>
    )
}

export default FormContato;