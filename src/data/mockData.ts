import { StoryPoint } from "../api/models";

export const mockData: StoryPoint[] = [
{
    id: 1,
    choices: [{id: 1, choice: "got to 2", destination: 2}, {id: 2, choice: "got to 3", destination: 3}],
    image: {url: "my/image/url/1"},
    story: { text: "some story 1"}
},
{
    id: 2,
    choices: [{id: 2, choice: "got to 3", destination: 3}],
    image: {url: "my/image/url/2"},
    story: { text: "some story 2"}
},
{
    id: 3,
    choices: [{id: 3, choice: "got to 4", destination: 4}],
    image: {url: "my/image/url/3"},
    story: { text: "some story 3"}
},
{
    id: 4,
    choices: [{id: 4, choice: "got to 5", destination: 5}],
    image: {url: "my/image/url/4"},
    story: { text: "some story 4"}
},
{
    id: 5,
    choices: [{id: 5, choice: "got to 6", destination: 1}],
    image: {url: "my/image/url/5"},
    story: { text: "some story 5"}
}, 

]