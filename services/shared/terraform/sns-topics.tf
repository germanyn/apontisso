resource "aws_sns_topic" "user-created-topic" {
  name = "user-created-topic"
}

output "topics" {
  value = {
    user-created-arn: "${aws_sns_topic.user-created-topic.arn}"
  }
}
