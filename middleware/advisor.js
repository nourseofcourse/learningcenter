export default function({ store, redirect, route}) {
  if( !store.state.auth.user.role.includes("administrator") || !store.state.auth.user.role.includes("advisor") ) {
    return redirect('/')
  }
}
