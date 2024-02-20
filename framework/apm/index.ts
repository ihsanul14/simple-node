import env from '../env/index'
import apm from 'elastic-apm-node';


class APM {
    static apmAgent: apm.Agent;
    static trace: apm.Transaction
    Start(){
        process.env.ELASTIC_APM_SERVER_URL = env.apm.host
        apm.start({
            serverUrl: env.apm.host,
            serviceName: env.apm.appName,
            secretToken: env.apm.token,
            environment:env.apm.environment
        });
        return apm
    }
    SetTransaction(trx:apm.Transaction){
        APM.trace = trx
    }
    GetAgent(){
        return APM.trace
    }
}

export default APM; 