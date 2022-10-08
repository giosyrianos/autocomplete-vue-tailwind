import http from "./http.common"

class DestinationDataService {
	getAllDestinations() {
		return http.get("/destinations")
	}
}

export default new DestinationDataService()
