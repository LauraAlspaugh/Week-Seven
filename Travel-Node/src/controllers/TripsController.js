import { Auth0Provider } from "@bcwdev/auth0provider";
import { tripsService } from "../services/TripsService.js";
import BaseController from "../utils/BaseController.js";
import { logger } from "../utils/Logger.js";

export class TripsController extends BaseController {
    constructor() {
        super('api/trips')
        this.router
            .get('', this.getTrips)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createTrip)
    }
    async createTrip(request, response, next) {
        try {
            const tripData = request.body
            const userInfo = request.userInfo
            tripData.creatorId = userInfo.id
            const trip = await tripsService.createTrip(tripData)
            return response.send(trip)
        } catch (error) {
            next(error)
        }
    }
    async getTrips(request, response, next) {
        try {
            const trip = await tripsService.getTrips()
            return response.send(trip)
        } catch (error) {
            next(error)
        }
    }
}