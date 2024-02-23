import http from "../../utils/httpClient";

const animalsService = () => {
    const getAnimals = () => {
        const apiURL = "api/content/spaces/animals/types/game/entries?per_page=10"
        return http.get(apiURL);
    };

    return { getAnimals };
}

export default animalsService;