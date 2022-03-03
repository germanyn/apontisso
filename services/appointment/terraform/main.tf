data "aws_sns_topic" "user-created-topic" {
  name = "user-created-topic"
}

resource "aws_sqs_queue" "user-created-queue" {
  name = "appointment_user-created-queue"
}

resource "aws_sns_topic_subscription" "user-created-subscription" {
  topic_arn                       = "${data.aws_sns_topic.user-created-topic.arn}"
  protocol                        = "sqs"
  endpoint                        = "${aws_sqs_queue.user-created-queue.arn}"
}


output "userCreatedQueueArn" {
  value = aws_sqs_queue.user-created-queue
}
