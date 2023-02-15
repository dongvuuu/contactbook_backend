import express from 'express';
import contacts from '../Controllers/ContactController.js';

const Router = express.Router();

Router.get('/', contacts.findAll);
Router.post('/', contacts.create);
Router.delete('/', contacts.deleteAll);

Router.get('/favorite', contacts.findAllFavorite);

Router.put('/:id', contacts.update);
Router.get('/:id', contacts.findOne);
Router.delete('/:id', contacts.delete);

export default Router;