import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Input from "../components/Input";
import Button from "../components/Button";
import Select from "../components/Select";

class PersonalForm extends Component {
  constructor() {
    super();

    this.state = {
      nome: "",
      email: "",
      cpf: "",
      endereco: "",
      cidade: "",
      estado: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClickSubmit = () => {
    const { dispatchPersonalData, history } = this.props;
    dispatchPersonalData(this.state);
    history.push("/professionalform");
  };

  render() {
    const { nome, email, cpf, endereco, cidade, estado } = this.state;
    const states = [
      "Rio de Janeiro",
      "Minas Gerais",
      "Amapá",
      "Amazonas",
      "São Paulo",
      "Ceará",
      "Distrito Federal"
    ];
    return (
      <fieldset>
        <h1>💾 Dados Pessoais</h1>
        <Input
          label="nome: "
          type="text"
          onChange={this.handleChange}
          value={nome}
          name="nome"
          required
        />
        <Input
          label="email: "
          type="text"
          onChange={this.handleChange}
          value={email}
          name="email"
          required
        />
        <Input
          label="cpf: "
          type="text"
          onChange={this.handleChange}
          value={cpf}
          name="cpf"
          required
        />
        <Input
          label="endereco: "
          type="text"
          onChange={this.handleChange}
          value={endereco}
          name="endereco"
          required
        />
        <Input
          label="cidade: "
          type="text"
          onChange={this.handleChange}
          name="cidade"
          value={cidade}
        />
        <Select
          defaultValue="Selecione"
          defaultOption="Selecione"
          onChange={this.handleChange}
          value={estado}
          label="Estado: "
          id="estado"
          name="estado"
          options={states}
        />
        <Button type="button" label="Enviar" onClick={this.handleClickSubmit} />
      </fieldset>
    );
  }
}

// dispatchPersonalData: (personalData) => dispatch({
//   type: 'SET_PERSONAL_DATA',
//   personalData,
// }),
const mapDispatchToProps = (dispatch) => ({
  dispatchPersonalData: (personalData) =>
    dispatch(setPersonalData(personalData))
});

PersonalForm.propTypes = {
  dispatchPersonalData: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default connect(null, mapDispatchToProps)(PersonalForm);
