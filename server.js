const express = require("express")
const { google } = require("googleapis")
const cors = require("cors")
const app = express()
const port = 3000

app.use(cors())

// Créer un client OAuth2 avec les identifiants client
const oauth2Client = new google.auth.OAuth2(
  YOUR_CLIENT_ID,
  YOUR_CLIENT_SECRET,
  YOUR_REDIRECT_URI
)

// Initialiser l'API Google Photos Library
const photos = google.photoslibrary({
  version: "v1",
  auth: oauth2Client,
})

// Définir une fonction pour récupérer les photos depuis Google Photos
async function getPhotos() {
  try {
    // Utiliser l'API Google Photos Library pour récupérer les médias
    const response = await photos.mediaItems.list({
      pageSize: 10, // Nombre de photos à récupérer (exemple: 10)
    })
    // Renvoyer les données des photos récupérées
    return response.data.mediaItems
  } catch (error) {
    console.error("Erreur lors de la récupération des photos:", error)
    throw error
  }
}

const messages = [
  {
    id: 1,
    text: "Hello World",
  },
  {
    id: 2,
    text: "Hello Node",
  },
]

app.get("/messages", (req, res) => {
  res.json(messages)
})

app.get("/photos", (req, res) => {
  // Logique pour récupérer les photos depuis Google Photos
  // Envoie les données au format JSON
  // res.json({ photos: [...] });
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
