// Seleciona vários elementos do DOM que serão utilizados no script
const editButton = document.querySelector(".profile__edit-button"); // Botão para abrir o popup de edição do perfil
const miPopup = document.querySelector(".popup"); // Popup de edição de perfil
const closeButton = document.querySelector(".popup__button-closed"); // Botão para fechar o popup de edição de perfil
const nameInput = document.querySelector(".popup__name"); // Campo de entrada para o nome no popup de edição
const jobInput = document.querySelector(".popup__description"); // Campo de entrada para a profissão no popup de edição
const saveButton = document.querySelector(".popup__button-create"); // Botão para salvar as alterações no popup de edição
const profileText = document.querySelector(".profile__text"); // Elemento que exibe o nome no perfil
const profileProfession = document.querySelector(".profile__profession"); // Elemento que exibe a profissão no perfil
const template = document.querySelector(".template-card"); // Template de cartão para clonar
const cardZone = document.querySelector(".elements"); // Contêiner onde os cartões são adicionados
const contenido = template.content; // Conteúdo do template
const buttonAddCard = document.querySelector(".profile__add-button"); // Botão para abrir o popup de adicionar cartão
const cardPopup = document.querySelector("#popup-card"); // Popup de adicionar cartão
const formCardPopup = document.querySelector(".popup__card-form"); // Formulário dentro do popup de adicionar cartão
const inputCardTitle = document.querySelector(".popup__card-title"); // Campo de entrada para o título do cartão
const inputUrl = document.querySelector(".popup__card-url"); // Campo de entrada para a URL da imagem do cartão
const buttonCloseAddCard = document.querySelector(".popup__card-button-closed"); // Botão para fechar o popup de adicionar cartão
const popupImage = document.querySelector("#popup-image"); // Popup de visualização da imagem
const buttonClosePopupImage = document.querySelector(".popup__image-button-closed"); // Botão para fechar o popup de visualização da imagem

// Define um array de objetos que representam os cartões iniciais com nome e link da imagem
const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

// Adiciona um evento de clique ao botão de edição do perfil para abrir o popup correspondente
editButton.addEventListener("click", () => {
  openPopup(miPopup); // Abre o popup de edição do perfil
});

// Adiciona um evento de clique ao botão de fechar o popup de edição do perfil
closeButton.addEventListener("click", () => {
  closePopup(miPopup); // Fecha o popup de edição do perfil
});

// Adiciona um evento de clique ao botão de salvar mudanças no popup de edição do perfil
saveButton.addEventListener("click", saveChanges); // Salva as alterações e fecha o popup

// Adiciona um evento de clique ao botão de adicionar cartão para abrir o popup correspondente
buttonAddCard.addEventListener("click", () => {
  openPopup(cardPopup); // Abre o popup de adicionar cartão
});

// Adiciona um evento de clique ao botão de fechar o popup de adicionar cartão
buttonCloseAddCard.addEventListener("click", () => {
  closePopup(cardPopup); // Fecha o popup de adicionar cartão
});

// Função para abrir um popup e adicionar um listener para fechar com a tecla Escape
function openPopup(popup) {
  popup.classList.add("popup__open"); // Adiciona a classe que torna o popup visível
  document.addEventListener("keydown", handleEscapeKey); // Adiciona um listener para a tecla Escape
}

// Função para fechar um popup e remover o listener da tecla Escape se não houver mais popups abertos
function closePopup(popup) {
  popup.classList.remove("popup__open"); // Remove a classe que torna o popup visível
  // Se não há mais popups visíveis, remove o listener para a tecla Escape
  if (document.querySelectorAll(".popup__open").length === 0) {
    document.removeEventListener("keydown", handleEscapeKey);
  }
}

// Função para tratar o evento de pressionar a tecla Escape para fechar o popup
function handleEscapeKey(evt) {
  console.log(evt); // Loga o evento para depuração
  if (evt.key === "Escape") {
    const openPopups = document.querySelectorAll(".popup__open"); // Seleciona todos os popups visíveis
    openPopups.forEach((popup) => closePopup(popup)); // Fecha todos os popups
  }
}

// Função para salvar as mudanças do perfil, atualizando os textos e fechando o popup
function saveChanges() {
  profileText.textContent = nameInput.value; // Atualiza o nome no perfil
  profileProfession.textContent = jobInput.value; // Atualiza a profissão no perfil

  closePopup(miPopup); // Fecha o popup de edição
}

// Função para adicionar um novo cartão à página
function cardAdd(name, link) {
  const card = template.cloneNode(true).content.querySelector(".elements__card"); // Clona o template de cartão
  const cardImage = card.querySelector(".elements__image"); // Seleciona a imagem do cartão
  const buttonDeleteCard = card.querySelector(".elements__image-trash"); // Seleciona o botão de deletar cartão
  const cardTitle = card.querySelector(".elements__title"); // Seleciona o título do cartão
  const buttonLike = card.querySelector(".elements__image-like"); // Seleciona o botão de curtir cartão

  // Adiciona eventos de clique aos botões de deletar e curtir cartão
  buttonDeleteCard.addEventListener("click", function () {
    card.remove(); // Remove o cartão do DOM
  });
  buttonLike.addEventListener("click", function () {
    buttonLike.classList.toggle("elements__image-like_active"); // Alterna a classe para curtir/descurtir o cartão
  });

  // Adiciona um evento de clique na imagem do cartão para abrir o popup de visualização da imagem
  cardImage.addEventListener("click", function () {
    openPopup(popupImage); // Abre o popup de visualização
    const popupPhoto = popupImage.querySelector(".popup__image-photo"); // Seleciona a foto no popup
    const popupTitle = popupImage.querySelector(".popup__image-name"); // Seleciona o título no popup

    // Define a foto e o título no popup
    popupPhoto.src = link;
    popupTitle.textContent = name;
    cardImage.alt = name;
  });

  cardImage.src = link; // Define a imagem do cartão
  cardTitle.textContent = name; // Define o título do cartão
  cardImage.alt = name; // Define o texto alternativo da imagem
  return card; // Retorna o cartão criado
}

// Adiciona os cartões iniciais à página ao carregar o script
initialCards.forEach(function (element) {
  const newCard = cardAdd(element.name, element.link); // Cria um novo cartão
  cardZone.append(newCard); // Adiciona o cartão ao final do contêiner de cartões
});

// Adiciona um evento de submit ao formulário de adicionar cartão para criar um novo cartão
formCardPopup.addEventListener("submit", function (evt) {
  evt.preventDefault(); // Previne o comportamento padrão do formulário

  const cardToAdd = cardAdd(inputCardTitle.value, inputUrl.value); // Cria um novo cartão com os valores dos campos de entrada
  cardZone.prepend(cardToAdd); // Adiciona o novo cartão no início do contêiner de cartões

  closePopup(cardPopup); // Fecha o popup de adicionar cartão
});

// Adiciona um evento de clique ao botão de fechar o popup de visualização da imagem
buttonClosePopupImage.addEventListener("click", () => {
  closePopup(popupImage); // Fecha o popup de visualização da imagem
});
