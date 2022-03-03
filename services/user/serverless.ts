import 'dotenv/config'
import type { AWS } from '@serverless/typescript';
import { main } from './infra.json';

const serverlessConfiguration: AWS = {
  service: 'apontisso-user',
  frameworkVersion: '3',
  plugins: [
    'serverless-webpack',
    'serverless-offline',
    // 'serverless-localstack',
  ],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
    },
  },
  // import the function via paths
  functions: {
    getUsers: {
      handler: `src/handlers/getUsersHandler.main`,
      events: [
        {
          http: {
            method: 'get',
            path: 'users',
          },
        },
      ],
    },
    createUser: {
      handler: `src/handlers/createUserHandler.main`,
      events: [
        {
          http: {
            method: 'post',
            path: 'users',
          },
        },
      ],
      environment: {
        USER_CREATED_TOPIC_ARN: main.value.userCreatedArn,
      },
    },
  },
  package: { individually: true },
  custom: {
    'serverless-offline': {
      httpPort: process.env.PORT,
      lambdaPort: process.env.LAMBDA_PORT,
    },
  },
};

module.exports = serverlessConfiguration;
