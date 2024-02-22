import { useQuery } from "@tanstack/react-query";
import animalsService from "../services/animals";

const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
};

const useAnimals = () => {
    const { getAnimals: getAnimalsAPI } = animalsService();

    const { data, isError, isSuccess, isLoading } = useQuery({
        queryKey: ["animals"],
        queryFn: getAnimalsAPI,
        select: (data) => {
            const { entries } = data.data;
            const newData = [];
            if (entries) {
                entries.forEach(element => {
                    const newElement = {
                        uuid: element.meta.uuid,
                        image: element.fields.image,
                        matched: false
                    }
                    newData.push(...[
                        { ...newElement, id: `${element.meta.uuid}-1` },
                        { ...newElement, id: `${element.meta.uuid}-2` }
                    ])
                });
            }
            return shuffle(newData);
        }
    });

    return { animals: data, isError, isSuccess, isLoading };
}

export default useAnimals;