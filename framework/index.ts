import Router from './router'

class Framework{
    Start(){
        const router = new Router()
        router.Run();
    }
}

export default Framework