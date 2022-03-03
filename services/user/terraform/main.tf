data "aws_sns_topic" "user-created-topic" {
  name = "user-created-topic"
}

output "userCreatedArn" {
  value = data.aws_sns_topic.user-created-topic.arn
}
