# TODO remote configuration

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
}

module "main" {
    source = "../"
}

output "main" {
  value = module.main
}
