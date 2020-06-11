import { Application, Router } from "./deps.ts"

const books = new Map<string, any>()

books.set("1", {
  id: "1",
  title: "The Hound of the Baskervilles",
  author: "Conan Doyle, Arthur",
})

const router = new Router()

router
  .get("/", (ctx: any) => {
    ctx.response.body = "Hello world! server2"
  })
  .get("/book", (ctx: any) => {
    ctx.response.body = Array.from(books.values())
  })
  .get("/book/:id", (ctx: any) => {
    if (ctx.params && ctx.params.id && books.has(ctx.params.id)) {
      ctx.response.body = books.get(ctx.params.id)
    }
  })

const app = new Application()
app.use(router.routes())
app.use(router.allowedMethods())

await app.listen({ port: 8000 })
