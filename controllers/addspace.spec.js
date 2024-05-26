const { create_space } = require('./addspace');
const Space = require('../models/space_model');

// Mock de Space.save pour simuler son comportement
jest.mock('../models/space_model', () => ({
  save: jest.fn(),
}));

describe('create_space function', () => {
  it('should create a new space', async () => {
    // Données simulées du formulaire
    const req = {
      body: {
        titre: 'Test Titre',
        description: 'Test Description',
        proprietaire: 'Test Proprietaire',
        dimension: 10,
        cathegorie: 'Test Cathegorie',
        place_assise: 5,
        place_debout: 10,
        ville: 'Test Ville',
        prix: 100,
        imageUrl: ['http://example.com/image.jpg'],
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    // Appel de la fonction create_space avec les données simulées
    await create_space(req, res);

    // Vérification que Space.save a été appelé avec les bonnes données
    expect(Space.save).toHaveBeenCalledWith(expect.objectContaining({
      titre: 'Test Titre',
      description: 'Test Description',
      proprietaire: 'Test Proprietaire',
      dimension: 10,
      cathegorie: 'Test Cathegorie',
      place_assise: 5,
      place_debout: 10,
      ville: 'Test Ville',
      prix: 100,
      imageUrl: ['http://example.com/image.jpg'],
    }));

    // Vérification que la réponse a été renvoyée avec le bon statut et les données correctes
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
      success: true,
      message: "l'espace a été ajouté avec succes",
      space: expect.objectContaining({
        titre: 'Test Titre',
        description: 'Test Description',
        proprietaire: 'Test Proprietaire',
        dimension: 10,
        cathegorie: 'Test Cathegorie',
        place_assise: 5,
        place_debout: 10,
        ville: 'Test Ville',
        prix: 100,
        imageUrl: ['http://example.com/image.jpg'],
      }),
    }));
  });

});
