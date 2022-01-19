const express = require('express')
const app = express()
const { requestLogger } = require('./middlewares/requestLogger')

app.use(express.json())
app.use(requestLogger)

let stores = [
    {
      id: 1,
      name: "K-Supermarket Tripla",
      traffic: "low",
      date: "2020-01-10T17:30:31.098Z"
    },
    {
      id: 2,
      name: "K-Market Rahakamarinkatu",
      traffic: "medium",
      date: "2020-01-10T18:39:34.091Z"
    },
    {
      id: 3,
      name: "K-Market Pasilan asema",
      traffic: "high",
      date: "2020-01-10T19:20:14.298Z"
    }
  ]

  app.get('/', (req, res) => {
    res.send('<h1>Hello Kesko!</h1>')
  })
  
  app.get('/api/stores', (req, res) => {
    res.json(stores)
  })

  app.get('/api/stores/:id', (request, response) => {
    const id = Number(request.params.id)
    const store = stores.find(store => store.id === id)
    if (store) {
        response.json(store)
    } else {
        response.status(404).end()
    }
  })

  const generateId = () => {
    const maxId = stores.length > 0
      ? Math.max(...stores.map(n => n.id))
      : 0
    return maxId + 1
  }
  
  app.post('/api/stores', (request, response) => {
    const body = request.body
  
    if (!body.name) {
      return response.status(400).json({ 
        error: 'name missing' 
      })
    }
  
    const store = {
      name: body.name,
      traffic: body.traffic,
      date: new Date(),
      id: generateId(),
    }
  
    stores = stores.concat(store)
  
    response.json(store)
  })

  app.put('/api/stores/:id', (request, response) => {
    const id = Number(request.params.id)
    const body = request.body
  
    if (!body.traffic) {
      return response.status(400).json({ 
        error: 'traffic info missing' 
      })
    }

    const storeToBeUpdated = stores.find(store => store.id === id)

    if (!storeToBeUpdated) {
        return response.status(404).json({ 
          error: 'Store not found' 
        })
      }

    const updatedStore = {
      name: storeToBeUpdated.name,
      traffic: body.traffic,
      date: new Date(),
      id: storeToBeUpdated.id,
    }

    stores = stores.map(store => store.id === updatedStore.id ? updatedStore : store)
    
    response.json(updatedStore)
  })

  const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
  }
  
  app.use(unknownEndpoint)

  const PORT = process.env.PORT || 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })