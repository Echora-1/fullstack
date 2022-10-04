export default function auth ({ $cookies, redirect }) {
  if (!$cookies.get('token')) {
    return redirect('/log-in')
  }
}
