import router from './router'
import Logger from './logger';

class Framework{
    Run(){
        const port = 30001;
        router.listen(port, () => {
            const logger = Logger()
            logger.Debug(`Server is running on port ${port}`);
        });
    }
    
}
export default Framework