// Define a classe Card
export class Card {
  // Construtor da classe
  constructor(name, link, templateSelector, openPopupCallback) {
    this._name = name; // Nome do card
    this._link = link; // Link da imagem do card
    this._templateSelector = templateSelector; // Seletor do template do card
    this._openPopupCallback = openPopupCallback; // Função de callback para abrir o popup
  }

  // Obtém o template do card a partir do seletor
  _getTemplate() {
    // Seleciona o template do card e clona o nó
    const cardElement = document
      .querySelector(this._templateSelector) // Seleciona o template
      .content.querySelector(".elements__card") // Encontra o card dentro do template
      .cloneNode(true); // Clona o nó do card

    return cardElement; // Retorna o card clonado
  }

  // Define os event listeners para o card
  _setEventListeners() {
    // Adiciona o listener para o botão de remover o card
    this._element
      .querySelector(".elements__image-trash")
      .addEventListener("click", () => {
        this._element.remove(); // Remove o card do DOM
      });

    // Adiciona o listener para o botão de like
    this._element
      .querySelector(".elements__image-like")
      .addEventListener("click", (event) => {
        event.target.classList.toggle("elements__image-like_active"); // Alterna a classe de like ativo
      });

    // Adiciona o listener para a imagem do card
    this._element
      .querySelector(".elements__image")
      .addEventListener("click", () => {
        this._openPopupCallback(this._link, this._name); // Chama o callback para abrir o popup
      });
  }

  // Gera o card com as propriedades e event listeners
  generateCard() {
    this._element = this._getTemplate(); // Obtém o template e clona o card

    // Define o texto e imagem do card
    const cardImage = this._element.querySelector(".elements__image");
    this._element.querySelector(".elements__title").textContent = this._name; // Define o nome
    cardImage.src = this._link; // Define o link da imagem
    cardImage.alt = this._name; // Define o texto alternativo da imagem

    this._setEventListeners(); // Define os event listeners

    return this._element; // Retorna o card gerado
  }
}
