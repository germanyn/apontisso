import { aws, model } from "dynamoose";

aws.ddb.local("http://localhost:8835");
model.defaults.set({
    prefix: `${process.env.SRV_NAME}-serv_`,
})
