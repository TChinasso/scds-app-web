export default async function (context) {
  // If the user is not authenticated
  const userLogged = context.store.getters['oauth/getUser'] ?? window.$cookies.get('SCDS-USER')
  console.log(context)
  if (!userLogged) {
    return await redirect('/login')
  }
  return await context.store.commit('oauth/setUser', userLogged, {root: true})
}
