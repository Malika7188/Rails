// app/javascript/pages/Guest.jsx
export default function Guest() {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Welcome to MapPinApp</h1>
          <p className="mb-6">Please sign in to view the map</p>
          <a href="/users/sign_in" className="bg-blue-500 text-white px-4 py-2 rounded">
            Sign In
          </a>
        </div>
      </div>
    )
  }