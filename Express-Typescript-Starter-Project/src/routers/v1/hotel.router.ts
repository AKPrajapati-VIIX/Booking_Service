import express from 'express';
import { createHotelHandler,  getHotelByIdHandler, getAllHotelsHandler, deleteHotelHandler } from '../../controllers/hotel.controller';
import { validateRequestBody } from '../../validators';
import { hotelSchema } from '../../validators/hotel.validator';

const hotelRouter = express.Router();

hotelRouter.post(
    '/', 
    validateRequestBody(hotelSchema),
    createHotelHandler); 

hotelRouter.get('/:id', getHotelByIdHandler); 

   // =============deleteHotelHandler, getAllHotelsHandler, when use iadd in import statment of the file

hotelRouter.get('/', getAllHotelsHandler);

hotelRouter.delete('/:id', deleteHotelHandler);

export default hotelRouter;