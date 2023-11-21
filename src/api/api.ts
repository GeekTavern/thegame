import { StoryPoint } from "./models";
import { mockData } from "../data/mockData";

export const getStoryPoint = async (id: number): Promise<StoryPoint> => {
    return mockData.find(storypoint => storypoint.id === id) ?? {
        id: 1,
        choices: [{    id: 1,
            choice: "Error",
            destination: 1}],
        image: {url: "Error"},
        story: {text: "Error"}
    }
}