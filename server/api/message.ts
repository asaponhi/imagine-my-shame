export default defineEventHandler(async (event) => {
  const body = await useBody(event)
  console.log("body",body)
  return { body }
})