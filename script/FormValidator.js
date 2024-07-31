// Define a classe FormValidator
export class FormValidator {
  // Construtor da classe
  constructor(settings, formElement) {
    this._settings = settings; // Configurações de validação
    this._formElement = formElement; // Elemento do formulário
    // Obtém uma lista dos elementos de entrada no formulário
    this._inputList = Array.from(
      formElement.querySelectorAll(settings.inputSelector)
    );
    // Obtém o botão de envio do formulário
    this._buttonElement = formElement.querySelector(
      settings.submitButtonSelector
    );
  }

  // Exibe uma mensagem de erro para um input específico
  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error` // Seleciona o elemento de erro associado
    );
    inputElement.classList.add(this._settings.inputErrorClass); // Adiciona classe de erro ao input
    errorElement.textContent = errorMessage; // Define a mensagem de erro
  }

  // Esconde a mensagem de erro para um input específico
  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error` // Seleciona o elemento de erro associado
    );
    inputElement.classList.remove(this._settings.inputErrorClass); // Remove a classe de erro do input
    errorElement.textContent = ""; // Limpa a mensagem de erro
  }

  // Verifica se o input é válido e exibe ou oculta erros
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage); // Mostra erro se inválido
    } else {
      this._hideInputError(inputElement); // Oculta erro se válido
    }
  }

  // Verifica se há algum input inválido
  _hasInvalidInput() {
    return this._inputList.some((inputElement) => !inputElement.validity.valid); // Retorna true se algum input for inválido
  }

  // Alterna o estado do botão de envio com base na validade dos inputs
  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._settings.inactiveButtonClass); // Adiciona classe inativa se houver input inválido
    } else {
      this._buttonElement.classList.remove(this._settings.inactiveButtonClass); // Remove classe inativa se todos os inputs forem válidos
    }
  }

  // Define os event listeners para os inputs do formulário
  _setEventListeners() {
    this._toggleButtonState(); // Atualiza o estado do botão inicialmente
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement); // Verifica a validade do input
        this._toggleButtonState(); // Atualiza o estado do botão
      });
    });
  }

  // Habilita a validação do formulário
  enableValidation() {
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault(); // Evita o envio do formulário para que os erros possam ser corrigidos
    });
    this._setEventListeners(); // Define os event listeners para inputs
  }
}
