// Restrict login/register pages if logged in
export default function({ store, redirect }) {
  if (store.state.auth.loggedIn) {
    return redirect('/')
  }
}
