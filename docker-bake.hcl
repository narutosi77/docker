// docker-bake.hcl
// Este archivo define cómo se construirá la imagen 'mi-app-sencilla'.

// Define un objetivo de compilación llamado 'mi-app-sencilla'.
target "mi-app-sencilla" {
  // El contexto de compilación es el directorio actual donde se encuentra el Dockerfile.
  context = "."
  // La ruta al Dockerfile que se utilizará para este objetivo.
  dockerfile = "./Dockerfile"
  // Aquí no definimos las etiquetas (tags) ni la opción de 'push',
  // ya que la acción de GitHub Actions lo manejará directamente para mayor flexibilidad.
  // Puedes añadir plataformas específicas si necesitas compilación multi-arquitectura, por ejemplo:
  // platforms = ["linux/amd64", "linux/arm64"]
}

// Opcional: Puedes definir un grupo predeterminado que incluya este objetivo.
// Esto permite ejecutar 'docker bake' sin especificar el objetivo directamente.
group "default" {
  targets = ["mi-app-sencilla"]
}
