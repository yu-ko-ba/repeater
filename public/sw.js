(() => {
  self.addEventListener("fetch", (e => {
    e.responseWith(caches.match(e.request).then((r) => {
      return fetch(e.request)
        .then((response) => caches.open("repeaterCache").then((c) => {
          c.put(e.request, response.clone())
          return response
        })
        .catch(() => r)
      )
    }))
  }))
})()
