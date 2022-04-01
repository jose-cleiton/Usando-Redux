import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Button from "../components/Button";
import Input from "../components/Input";
import TextArea from "../components/TextArea";

class ProfessionalForm extends Component {
  constructor() {
    super();
    this.state = {
      curriculo: "",
      cargo: "",
      descricao: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleSubmit = () => {
    const { history, dispatch } = this.props;
    dispatch(setProfessionalData(this.state));
    history.push("/formdisplay");
  };

  render() {
    const { curriculo, cargo, descricao } = this.state;
    return (
      <fieldset>
        <h1>💻 Dados Profissionais</h1>
        <TextArea
          label="Resumo do currículo: "
          value={curriculo}
          name="curriculo"
          maxLength="1000"
          onChange={this.handleChange}
          required
        />
        <Input
          label="Cargo:"
          name="cargo"
          type="text"
          value={cargo}
          onChange={this.handleChange}
          required
        />
        <TextArea
          label="Descrição do cargo: "
          name="descricao"
          maxLength="500"
          onChange={this.handleChange}
          value={descricao}
          required
        />
        <Button label="enviar" onClick={this.handleSubmit} />
      </fieldset>
    );
  }
}

ProfessionalForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};
export default connect()(ProfessionalForm);
