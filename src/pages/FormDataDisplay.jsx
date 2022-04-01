import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class FormDataDisplay extends Component {
  render() {
    // Recupere as informações do seu estado criado no Redux
    const { personalData: { nome, email, cpf, endereco, cidade, estado } } = this.props;
    const { professionalData: { cargo, descricao, curriculo } } = this.props;
    return (
      <div className="DataDisplay--span">
        <h2>Confirmar Dados enviados</h2>
        <div>
          <span>Nome: </span>
          { nome }
        </div>
        <div>
          <span>Email: </span>
          { email }
        </div>
        <div>
          <span>CPF: </span>
          { cpf }
        </div>
        <div>
          <span>Endereço: </span>
          { endereco }
        </div>
        <div>
          <span>Cidade: </span>
          { cidade }
        </div>
        <div>
          <span>Estado: </span>
          { estado }
        </div>
        <div>
          <span>Currículo: </span>
          { curriculo }
        </div>
        <div>
          <span>Cargo: </span>
          { cargo }
        </div>
        <div>
          <span>Descrição do cargo: </span>
          { descricao }
        </div>
        <button type="button">CONFIRMAR</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return ({
    personalData: state.personalDataReducer.personalData,
    professionalData: state.professionalDataReducer.professionalData,
  });
};

FormDataDisplay.propTypes = {
  personalData: PropTypes.objectOf(PropTypes.string).isRequired,
  professionalData: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps)(FormDataDisplay);
