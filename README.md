Tripleten web_project_around
Projeto do sprint 10, continução do sprint 7,8, 9 e agora 10 onde desenvolvi uma pagina tipo de rede social, com um formulário e utilizo JavaScript para interligar cada botão em suas devidas funções.
link para o site: https://guiarroyo.github.io/web_project_around---comentado/

Projeto: Around The U.S.

Descrição
* Este projeto é uma aplicação web interativa que permite ao usuário visualizar e adicionar cartões com imagens e informações. Inclui funcionalidades para editar o perfil do usuário e visualizar imagens em tamanho maior.

Estrutura do Projeto
* index.html: Arquivo principal HTML que define a estrutura da página.
* styles: Diretório contendo o arquivo CSS para estilização.
* script: Diretório contendo os arquivos JavaScript para funcionalidades e validação.
* images: Diretório contendo as imagens usadas no projeto.
* Arquivos Principais
* index.html

O arquivo HTML define a estrutura básica da página e inclui:

* Cabeçalho (header): Contém o logo da página.
* Seção de Perfil (section.profile): Exibe a imagem, nome e profissão do perfil do usuário, com botões para editar o perfil e adicionar novos cartões.
* Seção de Cartões (section.elements): Área onde os cartões são exibidos.
* Templates de Cartão (template.template-card): Estrutura base para criar novos cartões dinamicamente.
* Popups:
* Popup de Editar Perfil: Formulário para atualizar o nome e a descrição do perfil.
* Popup de Adicionar Novo Cartão: Formulário para adicionar um novo cartão com título e URL da imagem.
* Popup de Visualizar Imagem: Exibe uma imagem em tamanho maior.
* Rodapé (footer): Contém informações de copyright.
* index.css

* Arquivo de estilização CSS que define o visual da página.

* Scripts JavaScript

* card.js: Contém funções para adicionar, remover e curtir cartões, além de visualizar imagens em tamanho maior.
* Função cardAdd(name, link): Adiciona um novo cartão à página.
* Funções openPopup(popup) e closePopup(popup): Gerenciam a abertura e fechamento de popups.
* Função saveChanges(): Salva as mudanças feitas no perfil do usuário.
* FormValidator.js: Contém funções para validar formulários, incluindo:
* Função showInputError(): Exibe mensagens de erro para campos inválidos.
* Função hideInputError(): Remove mensagens de erro.
* Função checkInputValidity(): Verifica a validade dos inputs.
* Função toggleButtonState(): Habilita ou desabilita o botão de submissão com base na validade dos inputs.
* Função setEventListeners(): Configura listeners de eventos para inputs e botões de submissão.
* Função enableValidation(): Habilita a validação em todos os formulários.
* utils.js: Contém funções utilitárias que podem ser usadas em vários scripts.
* index.js: Arquivo principal de inicialização do JavaScript que pode incluir chamadas para outros scripts e funcionalidades principais da página.
* script.js: Script adicional que pode ser usado para funcionalidades específicas ou ajustes.
* validate.js: Script para validação adicional, complementando o FormValidator.js.
* Funcionalidades
* Editar Perfil: Permite ao usuário atualizar seu nome e descrição através de um formulário popup.
* Adicionar Cartão: Permite ao usuário adicionar novos cartões com título e imagem. O cartão é adicionado à seção de cartões.
* Visualizar Imagem: Permite ao usuário visualizar uma imagem em tamanho maior ao clicar no cartão.
* Remover Cartão: Permite ao usuário remover cartões da página.
* Curtir Cartão: Permite ao usuário marcar cartões com um "like".
* Validação de Formulários: Inclui validação para garantir que os campos de entrada estejam corretos antes da submissão.