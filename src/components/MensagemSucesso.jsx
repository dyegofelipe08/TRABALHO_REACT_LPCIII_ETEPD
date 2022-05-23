import React from "react";

export default function MensagemSucesso() {
    return (
        <div className="alert alert-dismissible alert-success">
            <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
            <strong>Produto cadastrado com sucesso!</strong> 
        </div>
    )
}