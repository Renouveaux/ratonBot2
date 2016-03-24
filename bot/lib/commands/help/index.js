import multiline from 'multiline.js';

module.exports = function(data, Config) {

  let prefix = Config.commandPrefix;

  const response = `
  Le prefix de commande actuel est ${prefix}

  Voici la liste de mes commandes disponibles;
  ${prefix}help : Affiche cette aide.
  ${prefix}ping : Test la connexion entre le bot et vous.
  ${prefix}share : Retourne l'adresse d'un site de partage de code.
  ${prefix}screen : Retourne l'adresse d'un site de partage d'image.
  ${prefix}question : Avec un nom d'utilisateur obligatoire, envoie un message à ce dernier lui indiquant comme exposer son problème.
  ${prefix}bit : Retourne une url bitifié via le site bit.ly
  ${prefix}sms : Alerte un utilisateur que le langage sms est prohibé

  ${prefix}clean : Efface le chat, Admin seulement
  ${prefix}config : Permet de modifier la config du bot à chaud, Admin seulement
  `;

  Bot.sendMessage({
    'to': data.userID,
    'message': response
  });

};
