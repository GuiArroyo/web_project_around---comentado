// Importa as classes e funções necessárias de módulos externos
import { Card } from "./card.js";
import { FormValidator } from "./FormValidator.js";
import { openPopup, closePopup } from "./utils.js";

// Seletores de elementos do DOM
const editButton = document.querySelector(".profile__edit-button"); // Botão para abrir o popup de edição de perfil
const miPopup = document.querySelector(".popup"); // Popup de edição de perfil
const closeButton = document.querySelector(".popup__button-closed"); // Botão para fechar o popup de edição de perfil
const nameInput = document.querySelector(".popup__name"); // Campo de entrada para o nome no popup de edição
const jobInput = document.querySelector(".popup__description"); // Campo de entrada para a profissão no popup de edição
const saveButton = document.querySelector(".popup__button-create"); // Botão para salvar as alterações no popup de edição
const profileText = document.querySelector(".profile__text"); // Elemento para mostrar o nome no perfil
const profileProfession = document.querySelector(".profile__profession"); // Elemento para mostrar a profissão no perfil
const templateSelector = ".template-card"; // Seletor do template de cartão
const cardZone = document.querySelector(".elements"); // Contêiner onde os cartões são adicionados
const buttonAddCard = document.querySelector(".profile__add-button"); // Botão para abrir o popup de adicionar cartão
const cardPopup = document.querySelector("#popup-card"); // Popup de adicionar cartão
const formCardPopup = document.querySelector(".popup__card-form"); // Formulário dentro do popup de adicionar cartão
const inputCardTitle = document.querySelector(".popup__card-title"); // Campo de entrada para o título do cartão
const inputUrl = document.querySelector(".popup__card-url"); // Campo de entrada para a URL da imagem do cartão
const buttonCloseAddCard = document.querySelector(".popup__card-button-closed"); // Botão para fechar o popup de adicionar cartão
const popupImage = document.querySelector("#popup-image"); // Popup de visualização da imagem
const buttonClosePopupImage = document.querySelector(".popup__image-button-closed"); // Botão para fechar o popup de visualização da imagem

// Dados iniciais dos cartões
const initialCards = [
  { name: "Valle de Yosemite", link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg" },
  { name: "Lago Louise", link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg" },
  { name: "Montañas Calvas", link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg" },
  { name: "Latemar", link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg" },
  { name: "Parque Nacional de la Vanoise", link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg" },
  { name: "Lago di Braies", link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg" },
];

// Função para abrir o popup de visualização da imagem
function openImagePopup(link, name) {
  openPopup(popupImage); // Abre o popup de visualização
  const popupPhoto = popupImage.querySelector(".popup__image-photo"); // Seleciona o elemento da foto no popup
  const popupTitle = popupImage.querySelector(".popup__image-name"); // Seleciona o elemento do título no popup

  // Define a foto e o título no popup
  popupPhoto.src = link;
  popupTitle.textContent = name;
  popupPhoto.alt = name;
}

// Função para salvar as alterações do perfil
function saveChanges() {
  profileText.textContent = nameInput.value; // Atualiza o nome no perfil
  profileProfession.textContent = jobInput.value; // Atualiza a profissão no perfil

  closePopup(miPopup); // Fecha o popup de edição
}

// Adiciona eventos aos botões e formulários
editButton.addEventListener("click", () => openPopup(miPopup)); // Abre o popup de edição ao clicar no botão
closeButton.addEventListener("click", () => closePopup(miPopup)); // Fecha o popup de edição ao clicar no botão de fechar
saveButton.addEventListener("click", saveChanges); // Salva as alterações e fecha o popup ao clicar no botão de salvar
buttonAddCard.addEventListener("click", () => openPopup(cardPopup)); // Abre o popup de adicionar cartão ao clicar no botão
buttonCloseAddCard.addEventListener("click", () => closePopup(cardPopup)); // Fecha o popup de adicionar cartão ao clicar no botão de fechar
buttonClosePopupImage.addEventListener("click", () => closePopup(popupImage)); // Fecha o popup de visualização da imagem ao clicar no botão de fechar

// Adiciona um novo cartão ao clicar no botão de adicionar cartão
formCardPopup.addEventListener("submit", function (evt) {
  evt.preventDefault(); // Previne o comportamento padrão do formulário
  const card = new Card(
    inputCardTitle.value, // Título do cartão
    inputUrl.value, // URL da imagem do cartão
    templateSelector, // Seletor do template de cartão
    openImagePopup // Função para abrir o popup de visualização da imagem
  );
  cardZone.prepend(card.generateCard()); // Adiciona o novo cartão no início da lista
  closePopup(cardPopup); // Fecha o popup de adicionar cartão
});

// Adiciona os cartões iniciais à página
initialCards.forEach((item) => {
  const card = new Card(item.name, item.link, templateSelector, openImagePopup); // Cria um novo cartão
  cardZone.append(card.generateCard()); // Adiciona o cartão ao final da lista
});

// Configurações de validação dos formulários
const validationSettings = {
  formSelector: ".popup__form", // Seletor do formulário
  inputSelector: ".popup__input", // Seletor dos campos de entrada
  submitButtonSelector: ".popup__button", // Seletor do botão de envio
  inactiveButtonClass: "popup__button_disabled", // Classe para desabilitar o botão
  inputErrorClass: "popup__input_type_error", // Classe para indicar erro no campo
  errorClass: "popup__error-visible", // Classe para exibir a mensagem de erro
};

// Habilita a validação para todos os formulários
const forms = Array.from(
  document.querySelectorAll(validationSettings.formSelector) // Seleciona todos os formulários
);
forms.forEach((form) => {
  const formValidator = new FormValidator(validationSettings, form); // Cria um validador para cada formulário
  formValidator.enableValidation(); // Habilita a validação
});

// Adiciona evento de clique ao overlay para fechar o popup
const popupOverlay = document.querySelectorAll(".popup__overlay");
popupOverlay.forEach((overlay) => {
  overlay.addEventListener("click", () => {
    closePopup(overlay.parentNode); // Fecha o popup ao clicar no overlay
  });
});
