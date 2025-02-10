import AppBar from "../components/AppBar";

function NewPost() {
  return (
    <div className="flex flex-col h-screen w-screen">
      <AppBar button="Publish" />
      <div className="flex justify-center w-full h-screen">
        <div className="flex flex-col px-3 w-full md:max-w-screen-md mt-20 gap-5">
          <input
            type="text"
            className="w-full border-b-2 text-gray-900 text-5xl p-2.5 focus:outline-none"
            placeholder="Title"
          />
          <textarea
            id="message"
            className="block p-2.5 w-full text-md text-gray-900 rounded-lg h-full resize-none focus:outline-none"
            placeholder="Tell Your Story..."
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default NewPost;
