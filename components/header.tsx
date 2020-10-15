export default function Header() {
  return (
    <header>
      <div className="flex justify-between items-center my-4">
        <h1 className="text-2xl border-b-4 border-indigo-600">
          Who is Remote?
        </h1>
        <a
          href=""
          className="bg-white hover:bg-gray-100 text-indigo-600 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        >
          Submit a Company
        </a>
      </div>
    </header>
  );
}
