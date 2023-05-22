import Router from './router'
import Logger from './logger';

class Framework{
    Start(){
        const router = new Router()
        router.Run();
    }
}

export default Framework