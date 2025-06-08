target "mi-app-sencilla" {
  context = "."
  dockerfile = "./Dockerfile"
}

group "default" {
  targets = ["mi-app-sencilla"]
}