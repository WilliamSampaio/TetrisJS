import preview from "./0.js"
import { createGame } from "./1.js"

export default function previews(){
    return [
        preview(),
        createGame().getPreview()
    ]
}