export interface StoryPoint {
    id: number
    choices: Choice[]
    image: Image
    story: Story
}

export interface Choice {
    id: number
    choice: string
    destination: number
}

export interface Image {
    id?: number
    name?: string
    url: string

}

export interface Story {
    id?: number
    text: string
}