export default function({ store, redirect, route}) {
  if( !store.state.auth.user.role.includes("administrator") ) {
    return redirect('/')
  }
}
