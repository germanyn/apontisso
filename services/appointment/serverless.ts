import 'dotenv/config'
import type { AWS } from '@serverless/typescript';
import { main } from './infra.json'

const serverlessConfiguration: AWS = {
  service: 'apontisso-appointment',
  frameworkVersion: '3',
  package: { individually: true },
  plugins: ['serverless-webpack', 'serverless-offline', 'serverless-offline-sqs'],
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
  functions: {
    listAppointments: {
      handler: `src/handlers/listAppointmentsHandler.main`,
      events: [
        {
          http: {
            method: 'get',
            path: 'appointments',
          },
        },
      ],
    },
    createAppointment: {
      handler: `src/handlers/createAppointmentHandler.main`,
      events: [
        {
          http: {
            method: 'post',
            path: 'appointments',
          },
        },
      ],
    },
    createdUser: {
      handler: `src/handlers/createdUserHandler.main`,
      events: [
        {
          sqs: {
            arn: main.value.userCreatedQueueArn.arn
          }
        },
      ],
    },
  },
  resources: {
    Resources: {
      UserCreatedQueue: {
        Type: 'AWS::SQS::Queue',
        Properties: {
          QueueName: 'user-created-queue',
          VisibilityTimeout: 60,
          MessageRetentionPeriod: 345600,
        },
      }
    }
  },
  custom: {
    'serverless-offline': {
      httpPort: process.env.PORT,
      lambdaPort: process.env.LAMBDA_PORT,
    },
    'serverless-offline-sqs': {
      autoCreate: false,
      apiVersion: '2012-11-05',
      endpoint: 'http://localhost:4566',
      region: 'us-east-1', //Keep it as per your config
      accessKeyId: 'root', // this could be anything
      secretAccessKey: 'root', // this could be anything
      skipCacheInvalidation: false,
    }
  }

};

module.exports = serverlessConfiguration;
