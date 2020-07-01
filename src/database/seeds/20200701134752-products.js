'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
     await queryInterface.bulkInsert('products', [
       {
        name: 'Bola de basquete',
        description: 'Bola de Basquete Adams Tamanho 7',
        category: 'basquete',
        price: 24.99,
        stock: 100,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name: 'Bomba de Ar Penalty SAC',
        description: 'tecnologia Double Action para inflar nos dois sentidos',
        category: 'bomba de ar',
        price: 32.99,
        stock: 200,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name: 'Mountain Bike Caloi Vulcan',
        description: 'O quadro em alumínio possui aro 29, indicado para pessoas que medem acima de 1,70m de altura e tem 21 marchas.',
        category: 'ciclismo',
        price: 1200,
        stock: 50,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name: 'Mountain Bike Caloi Moab',
        description: 'Equipada com 27 Marchas que podem personalizar seus treinos conforme o grau de dificuldade durante as pedaladas',
        category: 'ciclismo',
        price: 1300,
        stock: 100,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name: 'Óculos para Ciclismo Oxer HS14018',
        description: 'Material da armação com Policarbonato',
        category: 'ciclismo',
        price: 75.99,
        stock: 200,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name: 'Bota Impermeável de Couro Nord Atacam',
        description: 'Robusta e confortável, a Bota Impermeável Nord Atacama Unissex é a escolha ideal para oferecer segurança e proteção',
        category: 'bota',
        price: 159.99,
        stock: 100,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name: 'Bota Impermeável Bull Terrier Alpina Dry Lite',
        description: 'Bota Bull Terrier possui tecnologia Waterproof no cabedal (parte superior do calçado), que garante impermeabilidade na hora de realizar as diversas atividades.',
        category: 'bota',
        price: 170.99,
        stock: 100,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name: 'Luvas de Boxe Everlast Pró Style Training',
        description: 'Luvas de Boxe Everlast Pró Style Training - 12 OZ foram desenvolvidas para garantir muito conforto e proteção às suas mãos durante treinos e lutas',
        category: 'boxe',
        price: 139.99,
        stock: 50,
        createdAt: new Date(),
        updatedAt: new Date()
       },
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('products', null, {});     
  }
};
