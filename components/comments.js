import Date from "./date";

export default function Comments({ comments = [] }) {
  return (
    <>
      <div class="text-4xl font-extrabold ... mb-6">
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          Comments:
        </span>
      </div>

      <ul className="font-serif">
        {comments?.map(({ _id, _createdAt, name, email, comment }) => (
          <li
            key={_id}
            className="mb-4 border border-gray-600 shadow-md rounded-xl p-1"
          >
            <p className="font-bold text-xl mt-2">{comment}</p>
            <h4 className="mb-2 mt-2 leading-tight text-base">
              {name} - <Date dateString={_createdAt} />
            </h4>
          </li>
        ))}
      </ul>
      <div class="text-4xl font-extrabold ... mt-8 ">
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mb-5">
          Add Your Comment:
        </span>
      </div>
    </>
  );
}
