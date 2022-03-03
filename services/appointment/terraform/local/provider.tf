terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
    dotenv = {
      source  = "jrhouston/dotenv"
      version = "~> 1.0"
    }
  }
}

variable "AWS_ACCESS_KEY" {
    default="acess-key"
}
variable "AWS_SECRET_KEY" {
    default="secret-key"
}
variable "AWS_REGION" {
    default  ="us-east-1"
}

provider "aws" {
  region                      = var.AWS_REGION
  access_key                  = var.AWS_ACCESS_KEY
  secret_key                  = var.AWS_SECRET_KEY
  s3_force_path_style         = true
  skip_requesting_account_id  = true
  skip_credentials_validation = true
  endpoints {
    apigateway     = "http://localhost:4566"
    cloudformation = "http://localhost:4566"
    cloudwatch     = "http://localhost:4566"
    dynamodb       = "http://localhost:4566"
    es             = "http://localhost:4566"
    firehose       = "http://localhost:4566"
    iam            = "http://localhost:4566"
    kinesis        = "http://localhost:4566"
    lambda         = "http://localhost:4566"
    route53        = "http://localhost:4566"
    redshift       = "http://localhost:4566"
    s3             = "http://localhost:4566"
    secretsmanager = "http://localhost:4566"
    ses            = "http://localhost:4566"
    sns            = "http://localhost:4566"
    sqs            = "http://localhost:4566"
    ssm            = "http://localhost:4566"
    stepfunctions  = "http://localhost:4566"
    sts            = "http://localhost:4566"
  }
}

module "main" {
    source = "../"
}

output "main" {
  value = module.main
}
