import { app } from './app'
import { port } from './app'
const start = async () => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`)  //log the port number where the server is running
    })
}
start()