export default function({ store, redirect, route}) {
  if( !store.getters['isAdmin'] ) {
    return redirect('/')
  }
}
