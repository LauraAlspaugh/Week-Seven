import { dbContext } from "../db/DbContext.js"

class TripsService {
    async createTrip(tripData) {
        const trip = await dbContext.Trips.create(tripData)
        return trip

    }
    async getTrips() {
        const trips = await dbContext.Trips.find()
        return trips
    }

}
export const tripsService = new TripsService()