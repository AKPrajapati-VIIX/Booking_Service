import { createHotelDTO } from "../dto/hotel.dto";
import { createHotel, getAllHotels, getHotelById, softDeleteHotel } from "../repositories/hotel.repository";


// business logic for hotel servicesdemo example
// This is a demo example of how to block certain addresses from being used for hotel creation.
// const blockListAddress = ['123 Sample Street', '456 Example Avenue'];
export async function createHotelService(hotelData: createHotelDTO) {

    // if (blockListAddress.includes(hotelData.address)) {
    //     throw new Error('Hotel address is blocked');
    // }

    const hotel = await createHotel(hotelData);
    return hotel;
}

export async function getHotelByIdService(id: number) {
    const hotel = await getHotelById(id);
    return hotel;
}

export async function getAllHotelsService() {
    const hotels = await getAllHotels();
    return hotels;
}

export async function deleteHotelService(id: number) {
    const response = await softDeleteHotel(id);
    return response;
}